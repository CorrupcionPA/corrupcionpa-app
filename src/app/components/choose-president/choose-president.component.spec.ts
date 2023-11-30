import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ChoosePresidentComponent } from './choose-president.component'

describe('ChoosePresidentComponent', () => {
  let component: ChoosePresidentComponent
  let fixture: ComponentFixture<ChoosePresidentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePresidentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ChoosePresidentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
