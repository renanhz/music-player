import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSongsComponent } from './top-songs.component';

describe('TopSongsComponent', () => {
  let component: TopSongsComponent;
  let fixture: ComponentFixture<TopSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSongsComponent]
    });
    fixture = TestBed.createComponent(TopSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
