import { Component, Input } from '@angular/core';

@Component({
    selector: 'gallery-image-preview',
    templateUrl: './gallery-image-preview.component.html',
    styleUrls: ['./gallery-image-preview.component.scss']
})
export class GalleryImagePreviewComponent {

    @Input() imgSrc: string;
}
