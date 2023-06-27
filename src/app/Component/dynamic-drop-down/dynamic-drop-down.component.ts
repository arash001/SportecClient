import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { OptionItem } from 'src/app/Model/OptionsItem.model';
import { PutDataRequest } from 'src/app/Model/PutDataRequest.model';
import { Fixture } from 'src/app/Model/fixture.model';




@Component({
  selector: 'app-dynamic-drop-down',
  templateUrl: './dynamic-drop-down.component.html',
  styleUrls: ['./dynamic-drop-down.component.css']
})
export class DynamicDropDownComponent {
  custonDropdown = new FormControl();
  filterControl = new FormControl();
  filteredOptions!: Observable<Array<OptionItem>>;
  optionItems!: Array<OptionItem>;
titel:string ="Titel";
 dataList: string[] = [];
   matchDayControl = new FormControl();
   @Input()  matchDays: string[] = [];
   @Output()  selectedMatchDay: any = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.dataList)
    this.optionItems = this.dataList.map((item) => {
      return {
        name: item,
        value: true,
      };
    });
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        this.optionItems.forEach((option) => {
          option.value = option.name
            .toLocaleLowerCase()
            .includes(value.toLowerCase());
        });
        return this.optionItems;
      })
    );
  }

  onPanelClose() {
    this.filterControl.setValue('');
  }

  onChanges(selected :any)
  {
    this.selectedMatchDay.emit(selected)
  }

  toggleAllSelection(){
    
  }

}

