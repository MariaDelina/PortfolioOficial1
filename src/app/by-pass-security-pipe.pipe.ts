import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'byPassSecurity'
})
export class ByPassSecurityPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

    transform (value: any): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
