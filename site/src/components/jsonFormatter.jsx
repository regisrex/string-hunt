import JsonFormatter from "react-json-formatter"

export default function FormatJson({ json, title }) {

    const jsonStyle = {
        propertyStyle: { color: 'white' },
        stringStyle: { color: 'darkorange' },
        numberStyle: { color: 'darkorange' },
        braceStyle: { color: 'white' },
        bracketStyle: { color: 'white' },
        commaStyle: { color: 'white' },

    }

    return <div className="p-10 bg-neutral-700 bg-opacity-30 ">
        <h1 className="text-3xl text-white font-semibold">{ title }</h1>
        <hr  className="my-4 opacity-10"/>
        <JsonFormatter json={json} tabWith={4} jsonStyle={jsonStyle} />
    </div>
}