import {Autocomplete, Checkbox, Field, Radio, RadioIcons, Slider} from '..';
import {Button, Icon} from '../..';
import Element from '../../../lib/Element';
import HTML from './form-row.html';
import CSS from './form-row.scss';
import {HTTP_VERSION_NOT_SUPPORTED} from 'http-status-codes';


export default class FormRow extends Element {
    field?: Field;
    name?: string;
    value?: any;
    error: string | null = null;
    hidden: boolean = false;
    icon?: string;

    private _field?: any;
    private _icon?: Icon;
    private _errorSpan?: HTMLElement;


    static observedAttributes = ['name', 'hidden'];
    static boundProps = ['field', 'name', 'value', 'error', 'hidden'];


    constructor() {
        super(HTML, CSS, 'form-row');
    }

    connectedCallback() {
        super.connectedCallback();

        this._icon = this._root.querySelector('zen-ui-icon.icon') as Icon;
        this._errorSpan = this._root.querySelector('span.error') as HTMLElement;
    }

    async propertyChangedCallback(prop: keyof FormRow, oldV: any, newV: any) {
        switch (prop) {
            case 'field':
                await this.ready();

                // Remove the old field
                if (this._field) {
                    if (this._field instanceof Array) this._field.forEach(f => f.remove());
                    else this._field.remove();
                }
                this._createField(newV);

                const i = this._icon as Icon;
                i.style.display = Boolean(newV.icon) ? '' : 'none';
                i.classList.toggle('hide', !Boolean(newV.icon));

                if (newV.icon) {
                    i.type = newV.icon;
                }
                if (newV.iconColor) i.color = newV.iconColor;

                // Update type attribute
                if (newV.type) {
                    if (this.getAttribute('type') !== newV.type) {
                        this.setAttribute('type', newV.type);
                    }
                } else this.removeAttribute('type');

                break;

            case 'value':
                await this.ready();
                if (newV !== oldV) {
                    if (this._field) this._field.value = newV;
                    this.trigger('change', newV);
                }
                break;

            case 'hidden':
                this.style.display = Boolean(newV) ? 'none' : '';
                break;

            case 'error':
                await this.ready();
                (this._errorSpan as HTMLElement).style.display = Boolean(newV) ? '' : 'none';

        }
    }

    private _createField(f: Field): HTMLElement | HTMLElement[] | false {
        let field: any = document.createElement('input');
        const v = this.value || '';

        const change = (e: Event) => {
            e.stopPropagation();
            let value: any = field.value;

            if (f.type === 'checkbox') {
                value = field[0].checked;
            }

            this.value = value;
        };

        const {type} = f;


        switch (f.type) {
            case 'textarea':
                field = document.createElement('wc-wysiwyg');
                field.name = f.name;
                field.addEventListener('keyup', change);

                // TODO: Wait for ready
                setTimeout(() => {
                    field.value = v;
                }, 10);
                break;

            // HACK: To get the placeholder working
            case 'date':
                field.value = v;
                field.name = f.name;
                field.type = 'text';
                field.addEventListener('keyup', change);
                if (f.placeholder) field.placeholder = f.placeholder;
                field.addEventListener('focus', () => field.type = 'date');
                field.addEventListener('blur', () => {
                    if (!field.value) field.type = 'text';
                });

                break;


            case 'text':
            case 'input':
            case 'password':
            case 'email':
            case 'number':
                field.value = v;
                field.name = f.name;
                field.type = f.type;
                field.addEventListener('keyup', change);
                if (f.placeholder) field.placeholder = f.placeholder;
                break;


            case 'submit':
                field = document.createElement('zen-ui-button') as Button;
                field.classList.add('submit-button');
                field.innerHTML = f.value || 'Submit';
                field.addEventListener('click', () => {
                    this.trigger('submit');
                });
                if (f.color) field.color = f.color;
                break;


            case 'select':
                field = document.createElement('zen-ui-select') as Radio;
                if (f.name) field.setAttribute('name', f.name);
                field.addEventListener('change', change);
                if (f.placeholder) field.placeholder = f.placeholder;
                if (f.options) field.options = f.options;

                break;


            case 'checkbox':

                field = document.createElement('zen-ui-checkbox') as Checkbox;
                if (f.name) field.setAttribute('name', f.name);
                field.addEventListener('change', change);

                if (f.label) {
                    const label = document.createElement('span');
                    label.innerHTML = f.label;
                    field = [field, label];
                }
                break;


            case 'radio':
                field = document.createElement('zen-ui-radio-select') as Radio;
                field.options = f.options;
                if (f.name) field.setAttribute('name', f.name);
                field.addEventListener('change', change);
                break;

            case 'radio-icons':
                field = document.createElement('zen-ui-radio-icons') as RadioIcons;
                field.options = f.options;
                if (f.name) field.setAttribute('name', f.name);
                field.addEventListener('change', change);
                break;


            case 'autocomplete':
                field = document.createElement('zen-ui-autocomplete') as Autocomplete;
                field.setAttribute('name', f.name);
                field.type = f.type;
                field.results = f.results;
                field.addEventListener('change', change);
                field.value = v;

                if (f.placeholder) field.placeholder = f.placeholder;
                break;

            case 'slider':
                field = document.createElement('zen-ui-slider') as Slider;
                field.setAttribute('name', f.name);
                field.addEventListener('change', change);
                field.value = v;
                if (f.min) field.min = f.min;
                if (f.max) field.max = f.max;
                if (f.steps) field.steps = f.steps;
                if (f.label) field.label = f.label;
                break;


            // TODO: Custom web component fields
            default:
                this._warn(`Field type '${type}' is not supported`);

                return false;
        }


        this._field = field;

        if (field instanceof Array) {
            field.forEach(f => this._root.appendChild(f));
        } else {
            field.addEventListener('change', (e: Event) => e.stopPropagation());
            this._root.appendChild(field);
        }
        return field;
    }
}

window.customElements.define('zen-ui-form-row', FormRow);