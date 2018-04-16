import Element from '../../../lib/Element';
import HTML from './checkbox.html';
import CSS from './checkbox.scss';

export default class Checkbox extends Element {
    input: HTMLInputElement | null = null;
    name: string | undefined = undefined;

    static boundProps = ['name'];

    static observedAttributes = ['checked', 'name'];

    constructor() {
        super(HTML, CSS, 'Checkbox');
        this._handleChange = this._handleChange.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.input = this._root.querySelector('input') as HTMLInputElement;
        this.input.addEventListener('change', this._handleChange);
    }

    disconnectedCallback() {
        (this.input as HTMLInputElement).addEventListener('change', this._handleChange);
    }

    get checked(): boolean | null {
        if (!this.input) return null;
        return this.input.checked;
    }

    set checked(v) {
        if (this.input) this.input.checked = Boolean(v);
    }

    attributeChangedCallback(attr: keyof Checkbox, oldV: string, newV: string): void {
        switch (attr) {
            case 'checked':
                this.checked = Boolean(newV);
                break;
            case 'name':
                if (this.name !== newV) this.name = newV;
        }
    }

    async propertyChangedCallback(prop: keyof Checkbox, oldV: string, newV: string): Promise<void> {
        switch (prop) {
            case 'name':
                await this.ready();
                if (newV) {
                    if (this.getAttribute('name') !== newV) this.setAttribute('name', newV);
                }
                if (this.getAttribute('name') && !newV) this.setAttribute('name', '');
                break;

            default:
                break;
        }
    }

    private _handleChange(e: Event) {
        e.stopPropagation();
        this.trigger('change');
    }
}

window.customElements.define('zen-ui-checkbox', Checkbox);
