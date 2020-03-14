# react-csv-export
This is react-csv-export for exporting data to csv file

## Getting Started
```
npm install react-csv-export --save

import CsvLink from 'react-csv-export';
```

## Demo
https://cicada1992.github.io/react-csv-export/

Click the **Export CSV** Button in demo. You can see downloaded csv file.
```
const EXAMPLE_DATA_OF_DEMO = [
  { id: "id-0", name: "Youngjae", age: 29, country: "KOR" },
  { id: "id-1", name: "Kiook", age: 20, country: "JAP" },
  { id: "id-2", name: "Brian", age: 30, country: "USA" },
  { id: "id-3", name: "Kisoo", age: 41, country: "DPR" },
  { id: "id-4", name: "Youngsik", age: 51, country: "GER" }
];
```

## Props
| Property | Type | Required? | Description | Default Value 
|:---|:---|:---:|:---|:---|
| data | any[] | ✓ | What you want to export data
| filename | string | ✓ | Filename
| withTimeStamp | boolean |  | Concatenate utc time stamp behind the file name (example: `demo_export_1584169283290`) | false
| skipHeader | boolean |  | Skip header and export only real data | false
| skipEmptyLines | boolean |  | Skip Empty lines | false
| onClick | () => void |  | Handler on clicking export link

## Example
```
<CsvLink data={data} fileName="demo_export" withTimeStamp>
  <button>Export CSV</button>
</CsvLink>
```