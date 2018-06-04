import {html} from '@polymer/lit-element';
export default html`<style>:host{display:flex;height:var(--tab-height, var(--size-main, 4rem));line-height:var(--tab-height, var(--size-main, 4rem));overflow:hidden}:host .tab{flex:1;text-align:center;border:var(--tab-border, var(--border-200, 2px solid var(--color-grey-200, #eae3f0)));border-left:none;user-select:none}:host .tab:first-of-type{border-left:var(--tab-border, var(--border-200, 2px solid var(--color-grey-200, #eae3f0)));border-top-left-radius:var(--tab-border-radius, var(--border-radius, .4rem));border-bottom-left-radius:var(--tab-border-radius, var(--border-radius, .4rem))}:host .tab:last-of-type{border-top-right-radius:var(--tab-border-radius, var(--border-radius, .4rem));border-bottom-right-radius:var(--tab-border-radius, var(--border-radius, .4rem))}:host .tab.active{background-color:var(--tab-active-color, var(--color-main, var(--color-purple, #693a91)));color:var(--color-white, #fff)}:host .tab zen-ui-icon:not([type]){display:none}:host .option{text-align:left}:host{border-width:2px}
</style>`;
