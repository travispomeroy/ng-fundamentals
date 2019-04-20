import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventSession, restrictedWords} from "../shared";

@Component({
  templateUrl: './create-session.component.html',
  selector: "create-session",
  styles: [
      `
      em {
        float: right;
        color: #E05C65;
        padding-left: 10px;
        padding-right: 3px;
      }

      .error input, .error textarea, .error select {
        background-color: #E3C3C5;
      }

      .error ::-webkit-input-placeholder {
        color: #999;
      }

      .error ::-moz-placeholder {
        color: #999;
      }

      .error :-moz-placeholder {
        color: #999;
      }

      .error :-ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateSessionComponent implements OnInit {

  @Output()
  private saveNewSession = new EventEmitter();

  @Output()
  private cancel = new EventEmitter();

  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  newSessionForm: FormGroup;

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(newSessionForm) {
    let session: EventSession = {
      name: newSessionForm.name,
      presenter: newSessionForm.presenter,
      duration: +newSessionForm.duration,
      level: newSessionForm.level,
      abstract: newSessionForm.abstract,
      id: 999,
      voters: []
    };

    this.saveNewSession.emit(session);
  }

  cancelAddSession() {
    this.cancel.emit();
  }
}
