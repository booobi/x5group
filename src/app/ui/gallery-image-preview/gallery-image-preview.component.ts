import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
	selector: "gallery-image-preview",
	templateUrl: "./gallery-image-preview.component.html",
	styleUrls: ["./gallery-image-preview.component.scss"],
})
export class GalleryImagePreviewComponent {
    imgSrc: string;
    
	constructor(private modalRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) private modalData: { imgSrc: string }) {
        this.imgSrc = modalData.imgSrc;
	}
	
	onClose() {
		this.modalRef.close();
	}
}
