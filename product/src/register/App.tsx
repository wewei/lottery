import * as React from "react";
import { FontSizes } from "@fluentui/react/lib/Styling";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react/lib/Stack";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { DeviceUUID } from "device-uuid";

export default function App(): JSX.Element {
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
            }}></TextField>
        </Stack.Item>
        <Stack.Item>
            <PrimaryButton style={{
                fontSize: FontSizes.xLarge
            }}>Submit</PrimaryButton>
        </Stack.Item>
        <Stack.Item>
            {new DeviceUUID().get()}
        </Stack.Item>
    </Stack>;
}
