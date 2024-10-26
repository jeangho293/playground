import { Subject } from "rxjs";
import { concatMap } from "rxjs";

const subject = new Subject<number>();
const handler: Array<number[]> = [
  [1, 1, 1],
  [4, 5, 6],
];

subject
  .pipe(
    concatMap(async (event) => {
      await Promise.all(
        handler.map(([a, b, c]) => {
          if (a === event) {
            console.log(b, c);
          }
        })
      );
      return event;
    })
  )
  .subscribe();

subject.next(1);
