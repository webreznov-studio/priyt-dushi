export function sortArray<T, K extends keyof T>(originArr: T[], propertyName: K, cb: (a: T[]) => void): void {

    let arr: T[] = JSON.parse(JSON.stringify(originArr));

    arr.sort((a, b) => {

        let nameA = String(a[propertyName]).toLowerCase(),
            nameB = String(b[propertyName]).toLowerCase();

        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });

    cb(arr);
}