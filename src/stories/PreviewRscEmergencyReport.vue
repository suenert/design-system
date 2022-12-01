<script setup>
import { ref } from "vue";
import Form from "./Form.vue";
import FormGroup from "./FormGroup.vue";
import Columns from "./Columns.vue";
import Column from "./Column.vue";
import Button from "./Button.vue";
import Input from "./Input.vue";
import Textarea from "./Textarea.vue";
import RadioGroup from "./RadioGroup.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import ContentBlock from "./ContentBlock.vue";

let courseOfEvents = [
  {
    value: "accident",
    label: "Verkehrsunfall",
  },
  {
    value: "defect",
    label: "Technischer Defekt",
  },

  {
    value: "fire",
    label: "Fahrzeugbrand",
  },
  {
    value: "blend",
    label: "Vermischung von Gütern",
  },
];
let course = ref("accident");

let supplies = [
  {
    value: "one",
    label: "Diesel",
  },
  {
    value: "two",
    label: "Motoröl",
  },
  {
    value: "three",
    label: "Hydrauliköl",
  },
];

let cargo = [
  {
    value: "one",
    label: "Heizöl",
  },
  {
    value: "two",
    label: "Diesel",
  },
  {
    value: "three",
    label: "Benzin",
  },
  {
    value: "four",
    label: "Sonstiges",
  },
];
let fireSupplies = [
  {
    value: "one",
    label: "Kraftstoff / Betriebsmittel",
  },
  {
    value: "two",
    label: "Ladung",
  },
  {
    value: "three",
    label: "Löschwasser / Schaum",
  },
  {
    value: "four",
    label: "Sonstiges",
  },
];
let defectSupplies = [
  {
    value: "one",
    label: "Diesel",
  },
  {
    value: "two",
    label: "Benzin",
  },
  {
    value: "three",
    label: "Motoröl",
  },
  {
    value: "four",
    label: "Hydrauliköl",
  },
  {
    value: "five",
    label: "Sonstiges",
  },
];

let blendingTypes = [
  {
    value: "one",
    label: "Schaden beim Befüllen der Anlage",
  },
  {
    value: "two",
    label: "Vermischung von Produkten im Tank",
  },
];
let blendingType = ref("one");

let blendSupplies = [
  {
    value: "one",
    label: "Heizöl",
  },
  {
    value: "two",
    label: "Diesel",
  },
  {
    value: "three",
    label: "Benzin",
  },
  {
    value: "four",
    label: "AdBlue",
  },
  {
    value: "five",
    label: "Motoröl",
  },
  {
    value: "six",
    label: "Bitumen",
  },
  {
    value: "seven",
    label: "Säure",
  },
  {
    value: "eight",
    label: "Lauge",
  },
  {
    value: "nine",
    label: "Baustoffe",
  },
  {
    value: "ten",
    label: "Sonstiges",
  },
];
let damagedObjects = [
  {
    value: "one",
    label: "Straße / Pflaster",
  },
  {
    value: "two",
    label: "Erde",
  },
  {
    value: "three",
    label: "Kanalisation / Gewässer",
  },
  {
    value: "four",
    label: "Gebäude (innen)",
  },
  {
    value: "five",
    label: " Gebäude (außen)",
  },
  {
    value: "six",
    label: "Tank- / Industrieanlage",
  },
  {
    value: "seven",
    label: "Ware",
  },
  {
    value: "eight",
    label: "Sonstiges",
  },
];
</script>

<template>
  <ContentBlock width="3xl" class="p-8">
    <Form>
      <FormGroup title="Wer ist der Ansprechpartner Vorort?" description="">
        <Columns class="mt-6">
          <Column class="sm:col-span-4">
            <Input label="Vorname" name="first_name" placeholder="Max" />
          </Column>
          <Column class="sm:col-span-4">
            <Input label="Nachname" name="last_name" placeholder="Mustermann" />
          </Column>
          <Column class="sm:col-span-3">
            <Input
              label="Mobil"
              name="phone"
              placeholder="+49 1234 123456789"
            />
          </Column>
          <Column class="sm:col-span-3">
            <Input
              label="E-Mail (optional)"
              name="email"
              placeholder="max@mustermann.de"
            />
          </Column>
        </Columns>
      </FormGroup>

      <FormGroup
        class="pt-8"
        title="Wann und wo ist der Schaden entstanden?"
        description=""
      >
        <Columns class="mt-6">
          <Column class="sm:col-span-4">
            <Input label="Datum" name="day_of_incident" type="date" />
          </Column>
          <Column class="sm:col-span-4">
            <Input
              label="Unfall Ort"
              name="place_of_incident"
              placeholder="Wiesbaden HBF"
            />
          </Column>
        </Columns>
      </FormGroup>

      <FormGroup
        class="pt-8"
        title="Wie ist es zu dem Schaden gekommen?"
        description="Der Schadenhergang steuert die nachfolgenden Fragen"
      >
        <Columns class="mt-6">
          <Column class="sm:col-span-4">
            <RadioGroup v-model="course" :options="courseOfEvents" />
          </Column>
        </Columns>
      </FormGroup>

      <template v-if="course == 'accident'">
        <FormGroup
          class="pt-8"
          title="Sind Betriesbmittel ausgetreten?"
          description="Diese Stoffe betreffen das Fahrzeug"
        >
          <Columns class="mt-6">
            <Column class="sm:col-span-4">
              <CheckboxGroup :options="supplies" />
            </Column>
          </Columns>
        </FormGroup>

        <FormGroup
          class="pt-8"
          title="Ist Ladung ausgetreten?"
          description="Der Fokus liegt auf Umweltbelastung, falls unklar bitte Sonstiges ankreuzen"
        >
          <Columns class="mt-6">
            <Column class="sm:col-span-4">
              <CheckboxGroup :options="cargo" />
            </Column>
          </Columns>
        </FormGroup>
      </template>

      <template v-if="course == 'defect'">
        <FormGroup
          class="pt-8"
          title="Welche Stoffe sind ausgetreten?"
          description="Der Fokus liegt auf Umweltbelastung, falls unklar bitte Sonstiges ankreuzen"
        >
          <Columns class="mt-6">
            <Column class="sm:col-span-4">
              <CheckboxGroup :options="defectSupplies" />
            </Column>
          </Columns>
        </FormGroup>
      </template>

      <template v-if="course == 'fire'">
        <FormGroup
          class="pt-8"
          title="Welche Stoffe sind ausgetreten?"
          description="Der Fokus liegt auf Umweltbelastung, falls unklar bitte Sonstiges ankreuzen"
        >
          <Columns class="mt-6">
            <Column class="sm:col-span-4">
              <CheckboxGroup :options="fireSupplies" />
            </Column>
          </Columns>
        </FormGroup>
      </template>

      <template v-if="course == 'blend'">
        <FormGroup
          class="pt-8"
          title="Handelt es sich um eine Vermischung von Produkten im Tank?"
          description=""
        >
          <Columns class="mt-6">
            <Column class="sm:col-span-4">
              <RadioGroup v-model="blendingType" :options="blendingTypes" />
            </Column>
          </Columns>
        </FormGroup>

        <FormGroup
          class="pt-8"
          title="Welche Stoffe wurden vermischt?"
          description="Bei einer Vermischung ist es sehr wichtig ALLE Stoffe zu kennen"
        >
          <Columns class="mt-6">
            <Column class="sm:col-span-4">
              <CheckboxGroup :options="blendSupplies" />
            </Column>
          </Columns>
        </FormGroup>
      </template>

      <FormGroup
        class="pt-8"
        title="Welche Objekte sind vom Schaden betroffen?"
        description="Hier von hängt ab, welche Maschienen zur Reinigung notwendig sind"
      >
        <Columns class="mt-6">
          <Column class="sm:col-span-4">
            <CheckboxGroup :options="damagedObjects" />
          </Column>
        </Columns>
      </FormGroup>

      <FormGroup
        class="pt-8"
        title="Falls wichtige Informationen im Fragebogen fehlen"
        description="Hier können Sie zusätzliche Informationen eintragen. Formatierungen sind nicht möglich!"
      >
        <Columns class="mt-6">
          <Column class="sm:col-span-4">
            <Textarea label="Freitextfeld" />
          </Column>
        </Columns>
      </FormGroup>

      <template #actions>
        <Button kind="ghost" as="button">
          <span>Abbrechen</span>
        </Button>

        <Button kind="secondary" as="button">
          <span>Später bearbeiten</span>
        </Button>

        <Button type="submit"> Weiter </Button>
      </template>
    </Form>
  </ContentBlock>
</template>
