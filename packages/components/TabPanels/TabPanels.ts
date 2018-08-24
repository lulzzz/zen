
import {LitElement} from '@polymer/lit-element';
import {component, property, bindAttributes} from '../../util/decorators';
import { TemplateResult } from 'lit-html';
import { html } from 'lit-html/lib/lit-extended';
import CSS from './tab-panels-css';


export interface Tab {
    icon?: string;
    text?: string;
    disabled?: boolean;
}

export interface TabPanelsProps {
    tabs: Tab[];
}

@component('zen-tabs')
@bindAttributes
export default class Tabs extends LitElement implements TabPanelsProps {
    @property
    tabs: Tab[] = [];

    @property
    noexpand: boolean = false;

    get active() {
        return this._active;
    }
    set active(v: number) {
        if (this._active === v) return;

        this._active = v;
        (Array.from(this.children) as HTMLElement[]).forEach((c, i) => {
            if (v === i) c.removeAttribute('hidden');
            else c.setAttribute('hidden', 'hidden');
        });
    }
    @property
    private _active: number = -1;

    static _boundAttributes = ['noexpand'];

    connectedCallback() {
        super.connectedCallback();
        this.active = 0;
    }

    _render({tabs}: TabPanelsProps): TemplateResult {
        return html`
            ${CSS}
            <ul class="tabs">
                ${tabs.map((t, i) => html`
                    <li
                        class$="tab ${this.active === i ? 'active' : ''} ${t.disabled ? 'disabled' : ''}"
                        on-click="${() => this.active = i}"
                    >
                        ${t.icon ? html`<zen-icon type="${t.icon}"></zen-icon>` : null}
                        ${t.text ? html`<span>${t.text}</span>` : null}
                    </li>
                `)}
            </ul>

            <div class="panels">
                <slot></slot>
            </div>
        `;
    }
}
