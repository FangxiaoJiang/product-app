import { Directive,HostListener } from '@angular/core';

@Directive({
    selector: `[AddConfirm]`
 })
 export class ConfirmDirective {
    @HostListener('click', ['$event'])
    confirmFirst(event: Event) {
       return window.confirm('Are you sure to add this product?');
    }
 }