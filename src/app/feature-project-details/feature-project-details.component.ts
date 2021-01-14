import { BehaviorSubject, combineLatest } from "rxjs";
import { map, take } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import {
	RouteContainerSelectorToken,
} from "../providers";
import { ProjectDetailsFacade } from "../infrastructure/state/project-details.facade";
import { GalleryImagePreviewComponent } from "../ui/gallery-image-preview/gallery-image-preview.component";

const IMAGE_PAGE_SIZE = 10;

@Component({
	selector: "feature-project-details",
	templateUrl: "./feature-project-details.component.html",
	styleUrls: ["./feature-project-details.component.scss"],
})
export class FeatureProjectDetailsComponent implements OnInit, OnDestroy {
	readonly masonryOptions = {
		fitWidth: true,
		gutter: 10,
	};

	readonly faArrowUp = faArrowUp;

	isLoading$ = this.facade.isLoading$;

	details$ = this.facade.projectDetails$;

	detailsGalleryImageUrls$ = this.details$.pipe(
		map((details) => details.galleryImageUrls)
	);

	page$ = new BehaviorSubject(1);

	displayedGalleryImages$ = combineLatest([
		this.detailsGalleryImageUrls$,
		this.page$,
	]).pipe(map(([images, page]) => images.slice(0, page * IMAGE_PAGE_SIZE)));

	hasReachedEnd$ = combineLatest([
		this.displayedGalleryImages$,
		this.detailsGalleryImageUrls$,
	]).pipe(map(([displayed, rendered]) => displayed.length === rendered.length));

	constructor(
		@Inject(DOCUMENT) private document: Document,
		@Inject(RouteContainerSelectorToken) private routeContainerSelector: string,
		private facade: ProjectDetailsFacade,
		private route: ActivatedRoute,
		private dialog: MatDialog,
	) {}

	onImgClick(imgSrc: string) {
		this.dialog.open(GalleryImagePreviewComponent, {
			data: { imgSrc },
			panelClass: 'modal-reset'
		});
	}

	onShowMore() {
		this.page$.next(this.page$.value + 1);
	}

	onScrollTop() {
		this.document.body
			.querySelector(this.routeContainerSelector)
			.scrollTo({ top: 0, behavior: "smooth" });
	}

	ngOnInit() {
		// not using hashes so just take(1)
		this.route.params
			.pipe(
				take(1),
				map((params) => params["projectId"])
			)
			.subscribe((projectId) => {
				this.facade.getProject(projectId);
			});
	}

	ngOnDestroy() {
		this.facade.reset();
	}
}
