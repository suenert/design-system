<script setup>
import Form from "./Form.vue";
import FormGroup from "./FormGroup.vue";
import Columns from "./Columns.vue";
import Column from "./Column.vue";
import Button from "./Button.vue";
import Input from "./Input.vue";
import ContentBlock from "./ContentBlock.vue";

let options = [
  {
    value: "one",
    label: "LKW",
    description: "Lastenfahrzeug mit Ladefläche",
  },
  {
    value: "two",
    label: "TKW",
    description: "Ist ein LKW mit einem Tank als Aufbau",
  },
];
</script>

<template>
  <ContentBlock width="3xl" class="p-8">
    <Form>
      <FormGroup
        title="Wie lautet das Kennzeichen des Fahrzeugs?"
        description="Es reicht wenn die Zugmaschine oder der Anhänger bei der R+V versichert ist"
      >
        <Columns class="mt-6">
          <Column class="sm:col-span-4">
            <Input
              label="Kennzeichen Zugmaschine"
              name="plate"
              placeholder="Z. B. K-NL 1234"
            />
          </Column>
          <Column class="sm:col-span-4">
            <Input
              label="Kennzeichen Anhänger (optional)"
              name="plate"
              placeholder="Z. B. K-NL 1234"
            />
          </Column>
        </Columns>
      </FormGroup>
      <template #actions>
        <Button type="submit"> Versicherungsstatus überprüfen </Button>
      </template>
    </Form>
  </ContentBlock>
</template>
