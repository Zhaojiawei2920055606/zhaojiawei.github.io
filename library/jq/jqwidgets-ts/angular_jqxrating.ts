/*
jQWidgets v5.4.0 (2017-Oct)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxrating.js';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let JQXLite: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxRatingComponent),
    multi: true
}

@Component({
    selector: 'jqxRating',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class jqxRatingComponent implements ControlValueAccessor, OnChanges 
{
   @Input('count') attrCount: Number;
   @Input('disabled') attrDisabled: Boolean;
   @Input('itemHeight') attrItemHeight: Number;
   @Input('itemWidth') attrItemWidth: Number;
   @Input('precision') attrPrecision: Number;
   @Input('singleVote') attrSingleVote: Boolean;
   @Input('value') attrValue: Number;
   @Input('width') attrWidth: String | Number;
   @Input('height') attrHeight: String | Number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['count','disabled','height','itemHeight','itemWidth','precision','singleVote','value','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxRating;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxRating(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxRating(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxRating(this.properties[i])) {
                  this.host.jqxRating(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRating', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.onChangeCallback(this.host.val());
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxRating('setOptions', options);
   }

   // jqxRatingComponent properties
   count(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('count', arg);
      } else {
          return this.host.jqxRating('count');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRating('disabled', arg);
      } else {
          return this.host.jqxRating('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('height', arg);
      } else {
          return this.host.jqxRating('height');
      }
   }

   itemHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('itemHeight', arg);
      } else {
          return this.host.jqxRating('itemHeight');
      }
   }

   itemWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('itemWidth', arg);
      } else {
          return this.host.jqxRating('itemWidth');
      }
   }

   precision(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('precision', arg);
      } else {
          return this.host.jqxRating('precision');
      }
   }

   singleVote(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRating('singleVote', arg);
      } else {
          return this.host.jqxRating('singleVote');
      }
   }

   value(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('value', arg);
      } else {
          return this.host.jqxRating('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('width', arg);
      } else {
          return this.host.jqxRating('width');
      }
   }


   // jqxRatingComponent functions
   disable(): void {
      this.host.jqxRating('disable');
   }

   enable(): void {
      this.host.jqxRating('enable');
   }

   getValue(): number {
      return this.host.jqxRating('getValue');
   }

   setValue(value: number): void {
      this.host.jqxRating('setValue', value);
   }

   val(value?: number): any {
      if (value !== undefined) {
         return this.host.jqxRating("val", value);
      } else {
         return this.host.jqxRating("val");
      }
   };


   // jqxRatingComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
   }

} //jqxRatingComponent

