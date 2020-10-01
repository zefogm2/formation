import { AbstractControl } from '@angular/forms';

export function NumericValidator(control: AbstractControl) {

  if (control.value  ) {

    return {'numeric':true};
  }

  else return null;
}
