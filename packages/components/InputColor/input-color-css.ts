import {html} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html';
export default html`<style>:host input,:host img{position:absolute;width:100%;height:100%;top:0;left:0}:host .color zen-icon{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}:host{display:inline-block;color:var(--color-text, var(--color-grey-900, #443750));background-color:var(--input-bg, rgba(0,0,0,0));height:var(--input-height, var(--size-large, 6rem));line-height:var(--input-height, var(--size-large, 6rem));padding:0 var(--input-padding, var(--size-small, 2rem));border-radius:var(--input-border-radius, var(--border-radius, .4rem));border:none;width:100%;border:var(--input-border, var(--border-200, 2px solid var(--color-grey-200, #eae3f0)));transition:border var(--transition-time, .35s);font-size:var(--input-font-size, var(--font-size-main, 1.6rem));box-shadow:var(--input-shadow, );font-family:var(--font-family, "Work Sans",sans-serif)}:focus:host{border:var(--input-border-focus, var(--border-main, 2px solid var(--color-main, var(--color-purple, #693a91))))}:host::placeholder{color:var(--color-grey-300, #bda9cf)}:disabled:host{opacity:0.5;user-select:none}:read-only:host{user-select:none}.error:host{border-color:var(--color-error, var(--color-red, #ff5554))}:host{display:block;position:relative;cursor:pointer;box-sizing:border-box;padding:0;overflow:hidden}:host input{opacity:0;cursor:pointer}:host span{margin-left:var(--size-tiny, 1rem);vertical-align:middle}:host .color{position:relative;display:inline-block;vertical-align:top;width:var(--input-height, var(--size-large, 6rem));height:var(--input-height, var(--size-large, 6rem))}:host img{object-fit:contain;border:none}
</style>` as TemplateResult;
