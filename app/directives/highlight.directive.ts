import {
    Directive, ElementRef,
    HostListener, Renderer, Input
} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    userData: any = {};

    constructor(private _eleRef: ElementRef,
        private _renderer: Renderer) {
    }

    @Input() set highlight(obj: any) {
        this.userData = obj;
    }

    ngOnInit() {
        if (this.userData.company.name.indexOf('LLC') > 0)
            this._eleRef.nativeElement.style.backgroundColor = '#AF9BA2';
    }

    @HostListener('mouseenter') onMouseEnter() {
        //console.log('mouseenter', this._eleRef.nativeElement);
        this._eleRef.nativeElement.style.color = 'red';
        //this._renderer.setElementStyle(this._eleRef.nativeElement.nativeElement, 'color', 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        //console.log('mouseleave', this._eleRef.nativeElement);
        this._eleRef.nativeElement.style.color = '';
    }
}