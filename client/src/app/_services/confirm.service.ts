import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmDialogComponent } from '../modals/confirm-dialog/confirm-dialog.component';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
bsMOdalRef?: BsModalRef<ConfirmDialogComponent>
  constructor(private modalService: BsModalService) { }

  confirm(
    title = "Confirmation",
    message = "Are you sure you want to perform this action?",
    btnOkText = "Ok",
    btnCancelText = "Cancel"
  ): Observable<boolean>{
    const config = {
      initialState: {
        title,
        message,
        btnOkText,
        btnCancelText
      }
    }
    this.bsMOdalRef = this.modalService.show(ConfirmDialogComponent, config)
    return this.bsMOdalRef.onHidden!.pipe(
      map(() => {
        return this.bsMOdalRef!.content!.result
      })
    )
  }
}
