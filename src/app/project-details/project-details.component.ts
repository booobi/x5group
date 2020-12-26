import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GalleryImagePreviewComponent } from '../ui/gallery-image-preview/gallery-image-preview.component';
import { images } from './images';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
    readonly masonryOptions = {
        fitWidth: true,
        gutter: 10,
    }

    readonly PAGE_SIZE = 10;

    test$ = new BehaviorSubject('teeeeeest');

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
        map(([images, page]) => images.slice(0, page * this.PAGE_SIZE)),
    )
}
