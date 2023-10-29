import * as React from "react";
import { FontSizes } from "@fluentui/react/lib/Styling";
import { ITextField, TextField } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react/lib/Stack";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { DeviceUUID } from "device-uuid";
import axios from "axios";

const deviceId = new DeviceUUID().get();

function register(alias: string) {
    axios.post('/api/register', { alias, deviceId }).then(res => {
        console.log(res.data);
    });
}

export default function App(): JSX.Element {
    const textRef = React.useRef<ITextField>();
    const submit = React.useCallback(() => {
        register(textRef.current?.value);
    }, [textRef]);

    return <Stack verticalAlign="center" horizontalAlign="center" style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        margin: 0
    }} tokens={{ childrenGap: 10 }}>
        <Stack.Item>
            <TextField label="Please input your alias:" underlined styles={{
                field: {
                    fontSize: FontSizes.xLarge
                },
            }} componentRef={textRef}></TextField>
        </Stack.Item>
        <Stack.Item>
            <PrimaryButton style={{
                fontSize: FontSizes.xLarge
            }} onClick={submit}>Submit</PrimaryButton>
        </Stack.Item>
        <Stack.Item>{deviceId}</Stack.Item>
    </Stack>;
}
