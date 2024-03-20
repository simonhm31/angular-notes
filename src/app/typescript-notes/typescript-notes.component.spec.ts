import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptNotesComponent } from './typescript-notes.component';

describe('TypescriptNotesComponent', () => {
  let component: TypescriptNotesComponent;
  let fixture: ComponentFixture<TypescriptNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypescriptNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
