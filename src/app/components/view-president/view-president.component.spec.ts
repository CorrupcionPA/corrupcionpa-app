import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ViewPresidentComponent } from './view-president.component'

describe('ViewPresidentComponent', () => {
  let component: ViewPresidentComponent
  let fixture: ComponentFixture<ViewPresidentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPresidentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ViewPresidentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
