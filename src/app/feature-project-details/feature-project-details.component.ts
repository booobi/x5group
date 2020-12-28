import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryImagePreviewComponent } from '../ui/gallery-image-preview/gallery-image-preview.component';
import { images } from './images';

@Component({
    selector: 'feature-project-details',
    templateUrl: './feature-project-details.component.html',
    styleUrls: ['./feature-project-details.component.scss']
})
export class FeatureProjectDetailsComponent {
    readonly masonryOptions = {
        fitWidth: true,
        gutter: 10,
    }

    readonly IMAGE_PAGE_SIZE = 10;

    constructor(private modalService: NgbModal, public cdr: ChangeDetectorRef, public zone: NgZone) { }

    onImgClick(imgSrc: string) {
        const modal = this.modalService.open(GalleryImagePreviewComponent, { animation: true, centered: true, windowClass: 'bg-transparent', size: 'lg' });
        (modal.componentInstance as GalleryImagePreviewComponent).imgSrc = imgSrc;
    }

    onShowMore() {
        this.page$.next(this.page$.value + 1);
    }

    page$ = new BehaviorSubject(1);

    images$ = combineLatest([of(images), this.page$]).pipe(
        map(([images, page]) => images.slice(0, page * this.IMAGE_PAGE_SIZE)),
    )
}
