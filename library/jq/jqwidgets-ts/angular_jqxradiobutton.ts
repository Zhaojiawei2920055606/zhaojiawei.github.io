/*
jQWidgets v5.4.0 (2017-Oct)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxradiobutton.js';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let JQXLite: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxRadioButtonComponent),
    multi: true
}

@Component({
    selector: 'jqxRadioButton',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class jqxRadioButtonComponent implements ControlValueAccessor, OnChanges 
{
   @Input('animationShowDelay') attrAnimationShowDelay: Number;
   @Input('animationHideDelay') attrAnimationHideDelay: Number;
   @Input('boxSize') attrBoxSize: String | Number;
   @Input('checked') attrChecked: Boolean;
   @Input('disabled') attrDisabled: Boolean;
   @Input('enableContainerClick') attrEnableContainerClick: Boolean;
   @Input('groupName') attrGroupName: String;
   @Input('hasThreeStates') attrHasThreeStates: Boolean;
   @Input('rtl') attrRtl: Boolean;
   @Input('theme') attrTheme: String;
   @Input('width') attrWidth: String | Number;
   @Input('height') attrHeight: String | Number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','hasThreeStates','height','rtl','theme','width'];
   valueAttr: any;
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxRadioButton;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxRadioButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                  this.host.jqxRadioButton(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);

      this.__updateRect__();
      this.valueAttr = this.host[0].parentElement.getAttribute('value');
      if (options.checked === true) this.onChangeCallback(this.valueAttr);
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxRadioButton('setOptions', options);
   }

   // jqxRadioButtonComponent properties
   animationShowDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('animationShowDelay', arg);
      } else {
          return this.host.jqxRadioButton('animationShowDelay');
      }
   }

   animationHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('animationHideDelay', arg);
      } else {
          return this.host.jqxRadioButton('animationHideDelay');
      }
   }

   boxSize(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('boxSize', arg);
      } else {
          return this.host.jqxRadioButton('boxSize');
      }
   }

   checked(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('checked', arg);
      } else {
          return this.host.jqxRadioButton('checked');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('disabled', arg);
      } else {
          return this.host.jqxRadioButton('disabled');
      }
   }

   enableContainerClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('enableContainerClick', arg);
      } else {
          return this.host.jqxRadioButton('enableContainerClick');
      }
   }

   groupName(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('groupName', arg);
      } else {
          return this.host.jqxRadioButton('groupName');
      }
   }

   hasThreeStates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('hasThreeStates', arg);
      } else {
          return this.host.jqxRadioButton('hasThreeStates');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('height', arg);
      } else {
          return this.host.jqxRadioButton('height');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('rtl', arg);
      } else {
          return this.host.jqxRadioButton('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('theme', arg);
      } else {
          return this.host.jqxRadioButton('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('width', arg);
      } else {
          return this.host.jqxRadioButton('width');
      }
   }


   // jqxRadioButtonComponent functions
   check(): void {
      this.host.jqxRadioButton('check');
   }

   disable(): void {
      this.host.jqxRadioButton('disable');
   }

   destroy(): void {
      this.host.jqxRadioButton('destroy');
   }

   enable(): void {
      this.host.jqxRadioButton('enable');
   }

   focus(): void {
      this.host.jqxRadioButton('focus');
   }

   render(): void {
      this.host.jqxRadioButton('render');
   }

   uncheck(): void {
      this.host.jqxRadioButton('uncheck');
   }

   val(value?: boolean): any {
      if (value !== undefined) {
         return this.host.jqxRadioButton("val", value);
      } else {
         return this.host.jqxRadioButton("val");
      }
   };


   // jqxRadioButtonComponent events
   @Output() onChecked = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onUnchecked = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('checked', (eventData: any) => { this.onChecked.emit(eventData); this.onChangeCallback(this.valueAttr); });
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); });
      this.host.on('unchecked', (eventData: any) => { this.onUnchecked.emit(eventData); });
   }

} //jqxRadioButtonComponent

