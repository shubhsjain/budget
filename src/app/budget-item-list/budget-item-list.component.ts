import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
  

  
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];

  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClick(item :BudgetItem) {
    // show hte edit model
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      // check if result has value
      if (result) {

        // result is the update budget item.
        // replace item with updated/submit item from the form
        
        // this.budgetItems[this.budgetItems.indexOf(item)] = result;

        this.update.emit({
          old: item,
          new:result
        })
      }
    })
  }

}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
  }