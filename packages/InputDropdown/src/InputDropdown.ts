import { bindAttributes, component, dispatchChange, property } from '@origamijs/zen-lib/lib/decorators';
import { InputDropdownResults } from '@origamijs/zen-lib/lib/FormValidator';
import { html, LitElement } from '@polymer/lit-element';
import CSS from './input-dropdown-css';
import { TemplateResult } from 'lit-html';


export interface InputDropdownProps {
    value?: string;
    options: InputDropdownResults;
    open: boolean;
    _active?: number;
}

@component('zen-input-dropdown')
@dispatchChange()
@dispatchChange('open', 'toggle')
@bindAttributes
export class InputDropdown extends LitElement implements InputDropdownProps {
    @property
    value?: string;

    @property
    options: InputDropdownResults = [];

    @property
    open: boolean = false;

    @property
    _active?: number;

    // private static _boundAttributes = ['open'];

    constructor() {
        super();
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('keydown', this._handleKeyDown);
        document.addEventListener('mouseup', this._handleClick);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this._handleKeyDown);
        document.removeEventListener('mouseup', this._handleClick);
    }

    render(): TemplateResult {
        const { options, _active } = this;
        let opt;
        if (options) opt = this._options(options);


        if (!opt) return html``;

        return html`
            ${CSS}
            ${opt.map((o, i) => html`
                <div
                    class="option ${_active === i ? 'active' : ''}"
                    @click=${() => this.value = o.value}
                    @mouseenter=${() => this._active = i}
                > ${o.label} </div>
            `)}
        `;
    }

    _didRender() {
        if (!this.open) this.removeAttribute('open');
        else this.setAttribute('open', 'true');
    }

    private _options(options: InputDropdownResults) {
        if (options instanceof Array) {
            return options.map(v => {
                if (typeof v === 'string') return {value: v, label: v};
                return v;
            });
        }
        return Object.entries(options).map(([v, label]) => ({
            label,
            value: v
        }));
    }

    private _handleKeyDown(e: KeyboardEvent) {
        let opt: {value: string, label: string | number}[] = [];
        if (this.options) opt = this._options(this.options);

        if (!this._active) this._active = 0;

        switch (e.key) {
            case 'Escape':
                this.open = false;
                break;

            case 'ArrowDown':
                e.preventDefault();
                e.stopPropagation();
                this._active += 1;
                break;

            case 'ArrowUp':
                e.preventDefault();
                e.stopPropagation();
                this._active -= 1;
                break;

            case 'Enter':
                if (this.open) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.value = opt[this._active].value;
                }

                break;

            default:
                break;
        }

        if (this._active === opt.length || !this._active) this._active = 0;
        if (this._active < 0) this._active = opt.length - 1;
    }

    private _handleClick(e: Event) {
        // @ts-ignore Added by dom-repeat
        if (e.model) this.value = e.model.item.value;
        this.open = false;
    }
}