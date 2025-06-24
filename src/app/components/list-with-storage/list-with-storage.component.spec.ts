import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithStorageComponent } from './list-with-storage.component';

describe('ListWithStorageComponent', () => {
  let component: ListWithStorageComponent;
  let fixture: ComponentFixture<ListWithStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListWithStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
