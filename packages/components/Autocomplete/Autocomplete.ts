import { LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { html } from 'lit-html/lib/lit-extended';
import { InputDropdownResults } from '../../lib/FormValidator/FormFieldTypes';
import { component, dispatchChange, property } from '../../util/decorators';
import Input from '../Input/Input';
import InputDropdown from '../InputDropdown/InputDropdown';
import CSS from './autocomplete-css';


export interface props {
    placeholder?: string;
    name?: string;
    icon?: string;
    loading?: boolean;
    value?: string;
    query?: string;
    minlength?: number;
    options: Function | InputDropdownResults;
    _options: InputDropdownResults;
    _open: boolean;
}

/**
 * @class Zen Autocomplete
 * @example <zen-autocomplete>
 */
@component('zen-autocomplete')
@dispatchChange()
export default class Autocomplete extends LitElement implements props {

    /** Default text to show when there is no entered text */
    @property
    placeholder?: string;

    /** Name of the field */
    @property
    name?: string;

    /** Icon to display in the field */
    @property
    icon?: string;

    /** Displays a loading spinner on the right */
    @property
    loading?: boolean;

    /** Value of the selected item */
    @property
    value?: string;

    /** Inputted text */
    @property
    query?: string;

    /** Minimum number of characters to enter before searching */
    @property
    minlength?: number;

    @property
    options: Function | InputDropdownResults = {};

    @property
    _options: InputDropdownResults = {};

    @property
    _open: boolean = false;

    constructor() {
        super();
        this._handleChange = this._handleChange.bind(this);
    }

    private async _getResults(q = this.query) {
        if (!q) return;
        if (this.minlength && q.length < this.minlength) return [];

        this.loading = true;
        if (typeof this.options === 'function') {
            this._options = await this.options(q);
        } else this._options = this.options;
        this.loading = false;

        if (this._options instanceof Array && this._options.length > 0) this._open = true;
        else if (this._options) this._open = true;
        else this._open = false;
    }

    _render({icon, placeholder, loading, _options, _open, query, value}: props): TemplateResult {

        return html`
            ${CSS}
            <zen-input
                value=${query}
                on-input=${(e: {target: Input}) => this.query = e.target.value}
                type="text"
                placeholder=${placeholder}
                icon=${icon}
                loading=${loading}
            ></zen-input>

            <zen-input-dropdown
                options=${_options}
                value=${value}
                on-change=${this._handleChange}
                open=${_open}
            ></zen-input-dropdown>

        `;
    }

    _handleChange(e: {target: InputDropdown}) {
        this.value = e.target.value;
        this._open = false;
        this._updateQuery();
    }

    private _updateQuery() {
        if (!this.value) this.query = '';
        else {
            if (this._options instanceof Array) {

                if (this._options.includes(this.value)) this.query = this.value;
                else {
                    // @ts-ignore
                    const opt = this._options.find(o => o.value === this.value);
                    // @ts-ignore
                    if (opt) this.query = opt.label;
                }
            } else if (this._options instanceof Object) {
                // @ts-ignore
                this.query = this._options[this.value];
            }
        }
    }

    _didRender() {
        const dd = this.shadowRoot!.querySelector('zen-input-dropdown') as InputDropdown;
        if (!this._open) dd.removeAttribute('open');
        else dd.setAttribute('open', 'true');
    }

    async _propertiesChanged(p: props, c: props, o: props) {
        super._propertiesChanged(p, c, o);


        // If there is a default value, look it up in the options
        if (c && c.value && !p.query) {
            await this._getResults(this.value);
            this._open = false;
            this._updateQuery();
        }

        // If the query was changed...
        if (c && c.query && p.query) {
            if (p.minlength && p.query.length < p.minlength) return;
            if (!c.value) this._getResults();
        }
    }
}
