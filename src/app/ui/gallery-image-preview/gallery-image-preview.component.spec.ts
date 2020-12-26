/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GalleryImagePreviewComponent } from './gallery-image-preview.component';

describe('GalleryImagePreviewComponent', () => {
  let component: GalleryImagePreviewComponent;
  let fixture: ComponentFixture<GalleryImagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryImagePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
