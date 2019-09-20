# exit

#### Definition:

```ts
exit(code?: number = 0): void
```

#### Description:

Exit from the app programmatically.

`exit` function contains cleanup logic to return to valid and usable terminal session and thus, **should be used instead of `process.exit`**.

#### Arguments:

| Name   | Type     | Optional | Default value | Description                |
| ------ | -------- | :------: | ------------- | -------------------------- |
| `code` | `number` |   Yes    | `0`           | Exit code for the process. |

#### Example:

```js
import {exit} from '@react-slate/core';

exit();
// or
exit(1);
```