import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { component, dispatchChange, property } from '../../util/decorators';
import CSS from './checkbox-css';


export interface props {
    name?: string;
    size?: string;
    checked?: boolean;
}
@component('zen-checkbox')
@dispatchChange('checked')
export default class Checkbox extends LitElement implements props {

    @property
    name?: string;

    @property
    size?: string;

    @property
    checked?: boolean;

    _render({checked}: props): TemplateResult {
        return html`
            ${CSS}
            <label class="checkbox">
                <input type="checkbox" checked="${checked}" on-change=${
                    (e: {target: HTMLInputElement}) => this.checked = e.target.checked
                }/>
                <span class="check"></span>
            </label>
        `;
    }
}
