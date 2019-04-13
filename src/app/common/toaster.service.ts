import {Injectable} from "@angular/core";

declare let toastr;

@Injectable()
export class ToasterService {

  public success(message: string, title?: string) {
    toastr.success(message, title);
  }

  public info(message: string, title?: string) {
    toastr.info(message, title);
  }

  public warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  public error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
