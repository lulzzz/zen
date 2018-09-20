import {html} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html';
export default html`<style>:host input{display:inline-block;color:var(--color-text, var(--color-grey-600, #705a83));background-color:var(--input-bg, rgba(0,0,0,0));height:var(--input-height, var(--size-main, 4rem));line-height:var(--input-height, var(--size-main, 4rem));padding:0 var(--input-padding, var(--size-small, 2rem));border-radius:var(--input-border-radius, var(--border-radius, .4rem));border:none;width:100%;border:var(--input-border, var(--border-200, 2px solid var(--color-grey-200, #eae3f0)));transition:border var(--transition-time, .35s);font-size:var(--input-font-size, var(--font-size-main, 1.6rem));box-shadow:var(--input-shadow, );font-family:var(--font-family, "Work Sans",sans-serif)}:host input:focus{border:var(--input-border-focus, var(--border-main, 2px solid var(--color-main, var(--color-purple, #693a91))))}:host input::placeholder{color:var(--input-placeholder-color, var(--color-grey-300, #bda9cf))}:host input:disabled{opacity:0.5;user-select:none}:host input:read-only{user-select:none}:host input.error{border-color:var(--color-error, var(--color-red, #ff5554))}:host{display:block;position:relative}:host input{outline:none;box-sizing:border-box;padding-left:var(--input-padding-left, var(--input-padding, var(--size-small, 2rem)))}:host zen-icon{position:absolute;left:var(--size-tiny, 1rem);top:var(--size-tiny, 1rem)}:host zen-icon ~ input{--input-padding-left: var(--input-height, var(--size-main, 4rem))}
</style>` as TemplateResult;
