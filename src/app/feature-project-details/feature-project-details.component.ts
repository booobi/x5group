import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailsFacade } from '../infrastructure/state/project-details.facade';
import { GalleryImagePreviewComponent } from '../ui/gallery-image-preview/gallery-image-preview.component';
import { ActivatedRoute } from '@angular/router';

const IMAGE_PAGE_SIZE = 10;

@Component({
    selector: 'feature-project-details',
    templateUrl: './feature-project-details.component.html',
    styleUrls: ['./feature-project-details.component.scss']
})
export class FeatureProjectDetailsComponent implements OnInit, OnDestroy {
    readonly masonryOptions = {
        fitWidth: true,
        gutter: 10,
    }

    isLoading$ = this.facade.isLoading$;

    details$ = this.facade.projectDetails$;

    page$ = new BehaviorSubject(1);

    galleryImages$ = combineLatest(
        [this.details$.pipe(map(details => details.galleryImageUrls)), this.page$]).pipe(
        map(([images, page]) => images.slice(0, page * IMAGE_PAGE_SIZE)),
    );

    constructor(
        private facade: ProjectDetailsFacade,
        private route: ActivatedRoute,
        private modalService: NgbModal) { }

    onImgClick(imgSrc: string) {
        const modal = this.modalService.open(GalleryImagePreviewComponent, { animation: true, centered: true, windowClass: 'bg-transparent', size: 'lg' });
        (modal.componentInstance as GalleryImagePreviewComponent).imgSrc = imgSrc;
    }

    onShowMore() {
        this.page$.next(this.page$.value + 1);
    }

    ngOnInit() {
        // not using hashes so take(1)
        this.route.params.pipe(
            take(1),
            map(v => v['projectId']),
        ).subscribe(projectId => {
            this.facade.getProject(projectId);
        });
    }

    ngOnDestroy() {
        this.facade.reset();
    }
}
