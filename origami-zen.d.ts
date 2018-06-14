// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   @polymer/lit-element
//   lit-html

declare module 'origami-zen' {
    export * from 'origami-zen/packages/components';
    export * from 'origami-zen/packages/lib/FormValidator/FormFieldTypes';
}

declare module 'origami-zen/packages/components' {
    import Button from 'origami-zen/packages/components/Button/Button';
    import ButtonGroup from 'origami-zen/packages/components/ButtonGroup/ButtonGroup';
    import IconSet from 'origami-zen/packages/components/IconSet/IconSet';
    import Icon from 'origami-zen/packages/components/Icon/Icon';
    import Tooltip from 'origami-zen/packages/components/Tooltip/Tooltip';
    import Input from 'origami-zen/packages/components/Input/Input';
    import Autocomplete from 'origami-zen/packages/components/Autocomplete/Autocomplete';
    import Checkbox from 'origami-zen/packages/components/Checkbox/Checkbox';
    import Radio from 'origami-zen/packages/components/Radio/Radio';
    import RadioIcons from 'origami-zen/packages/components/RadioIcons/RadioIcons';
    import RadioTabs from 'origami-zen/packages/components/RadioTabs/RadioTabs';
    import InputDropdown from 'origami-zen/packages/components/InputDropdown/InputDropdown';
    import Select from 'origami-zen/packages/components/Select/Select';
    import FormRow from 'origami-zen/packages/components/FormRow/FormRow';
    import Form from 'origami-zen/packages/components/Form/Form';
    import Loading from 'origami-zen/packages/components/Loading/Loading';
    import Link from 'origami-zen/packages/components/Link/Link';
    export const Components: {
        Button: typeof Button;
        ButtonGroup: typeof ButtonGroup;
        IconSet: typeof IconSet;
        Icon: typeof Icon;
        Tooltip: typeof Tooltip;
        Input: typeof Input;
        Autocomplete: typeof Autocomplete;
        Checkbox: typeof Checkbox;
        Radio: typeof Radio;
        RadioIcons: typeof RadioIcons;
        RadioTabs: typeof RadioTabs;
        InputDropdown: typeof InputDropdown;
        Select: typeof Select;
        FormRow: typeof FormRow;
        Form: typeof Form;
        Loading: typeof Loading;
        Link: typeof Link;
    };
}

declare module 'origami-zen/packages/lib/FormValidator/FormFieldTypes' {
    import { ValidateBase, ValidateString, ValidateEqual } from 'origami-zen/packages/lib/FormValidator/rules';
    export type Field = FieldDefault | FieldSelect | FieldCheckbox | FieldSubmit | FieldRadio | FieldRadioTabs | FieldRadioIcons | FieldAutocomplete | FieldSlider;
    export interface Fieldsets {
        [key: string]: Field[];
    }
    export interface FormValues {
        [key: string]: any;
    }
    export interface FieldBase {
        name: string;
        value?: any;
        color?: string;
        default?: any;
        required?: boolean;
        disabled?: boolean;
        hidden?: boolean;
        label?: string;
        width?: 'half' | 'full';
        validate?: ValidateBase;
    }
    export interface FieldMixinIcon {
        icon?: string;
        iconColor?: string;
    }
    export interface FieldMixinPlaceholder {
        placeholder?: string;
    }
    export interface FieldOption {
        value: number | string;
        label: number | string;
    }
    export type FieldOptions = {
        [key: string]: string;
    } | FieldOption[];
    export interface FieldMixinOptions {
        options?: FieldOptions;
    }
    export interface FieldDefaultValidation extends ValidateBase, ValidateString, ValidateEqual {
    }
    export interface FieldDefault extends FieldBase, FieldMixinPlaceholder, FieldMixinIcon {
        type: 'text' | 'textarea' | 'input' | 'password' | 'email' | 'date' | 'number' | 'tel';
        validate?: FieldDefaultValidation;
    }
    export interface FieldSelect extends FieldBase, FieldMixinIcon, FieldMixinPlaceholder, FieldMixinOptions {
        type: 'select';
    }
    export interface FieldCheckbox extends FieldBase {
        type: 'checkbox';
        label?: 'string';
    }
    export interface FieldSubmit extends FieldBase, FieldMixinIcon {
        type: 'submit';
    }
    export interface FieldRadio extends FieldBase, FieldMixinOptions {
        type: 'radio';
    }
    export interface FieldRadioTabs extends FieldBase, FieldMixinOptions {
        type: 'radio-tabs';
    }
    export interface FieldRadioIconsOption {
        icon?: string;
        image?: string;
        html?: string;
        value: number | string;
        label: number | string;
    }
    export interface FieldRadioIcons extends FieldBase {
        type: 'radio-icons';
        options?: FieldRadioIconsOption[];
        columns?: number;
    }
    export interface FieldAutocomplete extends FieldBase, FieldMixinIcon, FieldMixinPlaceholder {
        type: 'autocomplete';
        results?: string[] | Function;
        minlength: number;
    }
    export interface FieldSlider extends FieldBase {
        type: 'slider';
        min?: number;
        max?: number;
        steps?: number;
        label?: string;
    }
}

declare module 'origami-zen/packages/components/Button/Button' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export interface ButtonProps {
        size?: string;
        icon?: string | false;
        iconright?: boolean;
        hollow?: boolean;
        color?: string;
        disabled?: boolean;
        loading?: boolean;
    }
    export default class Button extends LitElement implements ButtonProps {
        size?: string;
        icon?: string | false;
        iconright?: boolean;
        hollow?: boolean;
        color?: string;
        disabled?: boolean;
        loading?: boolean;
        _render({icon, size, hollow}: ButtonProps): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/ButtonGroup/ButtonGroup' {
    import { LitElement } from '@polymer/lit-element';
    import { ButtonProps } from 'origami-zen/packages/components/Button/Button';
    import { TemplateResult } from 'lit-html';
    export interface ButtonOptions extends ButtonProps {
        text?: string;
        onclick?: Function;
    }
    export interface props {
        buttons: ButtonOptions[];
    }
    export default class Button extends LitElement implements props {
        buttons: ButtonOptions[];
        _render({buttons}: props): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/IconSet/IconSet' {
    export default class IconSheet extends HTMLElement {
        connectedCallback(): void;
    }
}

declare module 'origami-zen/packages/components/Icon/Icon' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export { TemplateResult } from 'lit-html';
    export interface props {
        type?: string;
        color?: string;
        size?: string;
    }
    export default class Icon extends LitElement implements props {
        type?: string;
        color?: string;
        size?: string;
        static _boundAttributes: string[];
        _render({color, type}: {
            [key in keyof Icon]: any;
        }): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/Tooltip/Tooltip' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export type TooltipPosition = 'top-left' | 'top' | 'top-right' | 'right-top' | 'right' | 'right-bottom' | 'bottom-right' | 'bottom' | 'bottom-left' | 'top-right' | 'left-bottom' | 'left' | 'left-top';
    export interface props {
        position?: TooltipPosition;
        for: HTMLElement | null;
    }
    export default class Tooltip extends LitElement implements props {
        position?: TooltipPosition;
        for: HTMLElement | null;
        static _boundAttributes: string[];
        constructor();
        ready(): void;
        connectedCallback(): void;
        disconnectedCallback(): void;
        readonly target: Element | null;
        hide(show?: boolean): void;
        _render(): TemplateResult;
        _didRender(): void;
    }
}

declare module 'origami-zen/packages/components/Input/Input' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export interface props {
        placeholder?: string;
        name?: string;
        type: string;
        icon?: string;
        loading?: boolean;
        value?: string;
        disabled?: string;
    }
    export default class Input extends LitElement implements props {
        placeholder?: string;
        name?: string;
        type: string;
        icon?: string;
        loading?: boolean;
        value?: string;
        disabled?: string;
        static _boundAttributes: string[];
        _render({icon, loading, type, placeholder, disabled, value}: props): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/Autocomplete/Autocomplete' {
    import { LitElement } from '@polymer/lit-element';
    import InputDropdown, { InputDropdownResults } from 'origami-zen/packages/components/InputDropdown/InputDropdown';
    import { TemplateResult } from 'lit-html';
    export interface props {
        placeholder?: string;
        name?: string;
        icon?: string;
        loading?: boolean;
        value?: string;
        query?: string;
        minlength?: number;
        _options: InputDropdownResults;
        _open: boolean;
    }
    /**
      * @class Zen Autocomplete
      * @example <zen-autocomplete>
      */
    export default class Autocomplete extends LitElement implements props {
        /** Default text to show when there is no entered text */
        placeholder?: string;
        /** Name of the field */
        name?: string;
        /** Icon to display in the field */
        icon?: string;
        /** Displays a loading spinner on the right */
        loading?: boolean;
        /** Value of the selected item */
        value?: string;
        /** Inputted text */
        query?: string;
        /** Minimum number of characters to enter before searching */
        minlength?: number;
        _options: InputDropdownResults;
        _open: boolean;
        constructor();
        _render({icon, placeholder, loading, _options, _open, query, value}: props): TemplateResult;
        _handleChange(e: {
            target: InputDropdown;
        }): void;
        _didRender(): void;
        _propertiesChanged(p: props, c: props, o: props): Promise<void>;
    }
}

declare module 'origami-zen/packages/components/Checkbox/Checkbox' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export interface props {
        name?: string;
        size?: string;
        checked?: boolean;
    }
    export default class Checkbox extends LitElement implements props {
        name?: string;
        size?: string;
        checked?: boolean;
        _render({checked}: props): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/Radio/Radio' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export interface props {
        options: {
            [key: string]: string;
        };
        value?: string;
        name?: string;
    }
    export default class Radio extends LitElement implements props {
        options: {};
        value?: string;
        name?: string;
        _render({value, options}: props): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/RadioIcons/RadioIcons' {
    import { LitElement } from '@polymer/lit-element';
    import { FieldRadioIconsOption } from 'origami-zen/packages/lib/FormValidator/FormFieldTypes';
    import { TemplateResult } from 'lit-html';
    export interface props {
        options: FieldRadioIconsOption[];
        value?: string | number;
        name?: string;
        columns?: number;
    }
    export default class RadioIcons extends LitElement implements props {
        options: FieldRadioIconsOption[];
        value?: string | number;
        name?: string;
        columns?: number;
        _propertiesChanged(p: props, c: props, o: props): void;
        _render({value, options}: props): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/RadioTabs/RadioTabs' {
    import { LitElement } from '@polymer/lit-element';
    import { FieldOptions } from 'origami-zen/packages/lib/FormValidator/FormFieldTypes';
    import { TemplateResult } from 'lit-html';
    export interface props {
        options: FieldOptions;
        value?: string | number;
        name?: string;
    }
    export default class RadioTabs extends LitElement implements props {
        options: FieldOptions;
        value?: string | number;
        name?: string;
        _render({options, value}: props): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/InputDropdown/InputDropdown' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export type InputDropdownResults = InputDropdownOptions | InputDropdownList;
    export interface InputDropdownOptions {
        [key: string]: string | number;
    }
    export type InputDropdownList = string[];
    export interface props {
        value?: string;
        options: InputDropdownResults;
        open: boolean;
    }
    export default class InputDropdown extends LitElement implements props {
        value?: string;
        options: InputDropdownResults;
        open: boolean;
        constructor();
        connectedCallback(): void;
        disconnectedCallback(): void;
        _render({options, value, open}: props): TemplateResult;
        _didRender(): void;
    }
}

declare module 'origami-zen/packages/components/Select/Select' {
    import { LitElement } from '@polymer/lit-element';
    import { FieldOptions } from 'origami-zen/packages/lib/FormValidator/FormFieldTypes';
    import { TemplateResult } from 'lit-html';
    export interface props {
        options: FieldOptions;
        value?: string;
        name?: string;
        placeholder?: string;
        _open?: boolean;
    }
    export default class Select extends LitElement implements props {
        options: FieldOptions;
        value?: string;
        name?: string;
        placeholder?: string;
        _open?: boolean;
        _render({value, placeholder, options, _open}: props): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/FormRow/FormRow' {
    import { LitElement } from '@polymer/lit-element';
    import { ValidationErrors } from 'origami-zen/packages/lib/FormValidator';
    import { Field } from 'origami-zen/packages/lib/FormValidator/FormFieldTypes';
    import { TemplateResult } from 'lit-html';
    export interface props {
        field?: Field;
        name?: string;
        value?: any;
        error?: ValidationErrors;
        rowwidth?: 'half';
        hidden: boolean;
    }
    export default class FormRow extends LitElement implements props {
        field?: Field;
        name?: string;
        value?: any;
        error?: ValidationErrors;
        rowwidth?: 'half';
        hidden: boolean;
        static _boundAttributes: string[];
        constructor();
        _render({error, field, value}: props): TemplateResult;
        _renderField(f: Field, value: any): TemplateResult | undefined;
    }
}

declare module 'origami-zen/packages/components/Form/Form' {
    import { LitElement } from '@polymer/lit-element';
    import { Field, FormValues } from 'origami-zen/packages/lib/FormValidator/FormFieldTypes';
    import { ValidateFieldErrors } from 'origami-zen/packages/lib/FormValidator/Validator';
    import { TemplateResult } from 'lit-html';
    export interface props {
        values: FormValues;
        error?: string;
        fields: Field[];
        loading: boolean;
        _fieldErrors: ValidateFieldErrors;
        _validateOnChange: boolean;
        _showErrors: boolean;
    }
    export default class Form extends LitElement implements props {
        values: FormValues;
        error?: string;
        fields: Field[];
        loading: boolean;
        _fieldErrors: ValidateFieldErrors;
        _validateOnChange: boolean;
        _showErrors: boolean;
        constructor();
        _render({error, fields, values, _fieldErrors}: props): TemplateResult;
        submit(e?: Event): boolean;
        validate(showErrors?: boolean): boolean;
        _propertiesChanged(p: props, c: props, o: props): void;
    }
}

declare module 'origami-zen/packages/components/Loading/Loading' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export interface props {
        color?: string;
        size?: string;
    }
    export default class Loading extends LitElement implements props {
        color?: string;
        size?: string;
        static _boundAttributes: string[];
        _render(): TemplateResult;
    }
}

declare module 'origami-zen/packages/components/Link/Link' {
    import { LitElement } from '@polymer/lit-element';
    import { TemplateResult } from 'lit-html';
    export interface props {
        href?: string;
    }
    export default class Link extends LitElement implements props {
        href?: string;
        connectedCallback(): void;
        _firstRendered(): void;
        _render(): TemplateResult;
        _updateClass(l: Location): void;
    }
}

declare module 'origami-zen/packages/lib/FormValidator/rules' {
    export type ValidatorRules = ValidateBase | ValidateNumber | ValidateString | ValidateEqual;
    export interface ValidateBase {
        required?: boolean;
    }
    export interface ValidateNumber {
        min?: number;
        max?: number;
    }
    export interface ValidateString {
        minlen?: number;
        maxlen?: number;
        email?: boolean;
        url?: boolean;
        date?: boolean;
        number?: boolean;
        tel?: boolean;
        min?: boolean;
        max?: boolean;
    }
    export interface ValidateEqual {
        equal?: number | string;
    }
    export type ValidatorFunctions = {
        [key in keyof ValidatorRules]: Function;
    };
    const rules: ValidatorFunctions;
    export default rules;
}

declare module 'origami-zen/packages/lib/FormValidator' {
    export * from 'origami-zen/packages/lib/FormValidator/Validator';
}

declare module 'origami-zen/packages/lib/FormValidator/Validator' {
    import { Field, Fieldsets, FormValues } from 'origami-zen/packages/lib/FormValidator/FormFieldTypes';
    /** Options for constructing the validator */
    export interface ValidatorConstructorOptions {
            fields?: Field[];
            fieldsets?: Fieldsets;
    }
    /** Result returned from the main .validate() function */
    export interface ValidatorResponse {
            valid: boolean;
            fields?: ValidateFieldErrors;
            fieldsets?: ValidateFieldsetErrors;
    }
    /** Possible errors. Each key is a rule */
    export interface ValidationErrors {
            [rule: string]: string;
    }
    /** Map of field names and their errors */
    export interface ValidateFieldErrors {
            [fieldName: string]: ValidationErrors;
    }
    /** Map of fieldsets and their field errors */
    export interface ValidateFieldsetErrors {
            [fieldset: string]: ValidateFieldErrors;
    }
    /** Errors on a field */
    export interface FieldErrors {
            field: string;
            errors: ValidationErrors;
    }
    export default class Validator {
            /**
                * Validate the values
                * @param  {Object} values Key value pair of form data
                * @return {Object}        Validate state for fieldset or fields
                */
            constructor({fields, fieldsets}: ValidatorConstructorOptions);
            /**
                * Validates the form. Returns an object containing the validity, and the
                * possible errors for fields and fieldsets
                * @param values Form values to evaluate
                */
            validate(values: FormValues): ValidatorResponse;
    }
}
