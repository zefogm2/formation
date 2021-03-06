import { FormGroup, ValidatorFn } from '@angular/forms';

export function DependencyValidator(field: string, dependencies : string[]):ValidatorFn {
    return (fg: FormGroup): {[key: string]: any} => {

      let validator=null;
      console.log('Je valide');
      if (fg.get(field).value) {
          dependencies.forEach((dep)=> {
            if(!fg.get(dep).value) {
              validator={dependency:true};
              return;
            }
           })
      }
      console.log(validator);
      return validator;
    }
}
