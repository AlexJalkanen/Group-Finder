<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Which days work best for your current group? (Click on the days)

      <v-stepper-content step="1">
        <v-row>
          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              :color="monday"
              @click="monday == 'red' ? (monday = 'green') : (monday = 'red')"
            >
              <v-card-text>
                <h3>Monday</h3>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              :color="tuesday"
              outlined
              @click="
                tuesday == 'red' ? (tuesday = 'green') : (tuesday = 'red')
              "
            >
              <v-card-text>
                <h3>Tuesday</h3>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              :color="wednesday"
              outlined
              @click="
                wednesday == 'red' ? (wednesday = 'green') : (wednesday = 'red')
              "
            >
              <v-card-text>
                <h3>Wednesday</h3>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              :color="thursday"
              outlined
              @click="
                thursday == 'red' ? (thursday = 'green') : (thursday = 'red')
              "
            >
              <v-card-text>
                <h3>Thursday</h3>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              :color="friday"
              outlined
              @click="friday == 'red' ? (friday = 'green') : (friday = 'red')"
            >
              <v-card-text>
                <h3>Friday</h3>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              :color="saturday"
              outlined
              @click="
                saturday == 'red' ? (saturday = 'green') : (saturday = 'red')
              "
            >
              <v-card-text>
                <h3>Saturday</h3>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              :color="sunday"
              outlined
              @click="sunday == 'red' ? (sunday = 'green') : (sunday = 'red')"
            >
              <v-card-text>
                <h3>Sunday</h3>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col> Which timezone are you in? </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="timezone"
              :counter="18"
              label="Timezone"
              required
              class="mt-3"
              @keydown="limit( $event, 'timezone', 18)"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-btn to="/" text>Cancel</v-btn>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-step>

    <v-stepper-step :complete="e6 > 2" step="2">
      Where do you prefer to meet?

      <v-stepper-content step="2">
        <v-radio-group v-model="virtual" :mandatory="true">
          <v-radio label="Prefer to meet in person." value="physical"></v-radio>
          <v-radio label="Prefer to meet virtually." value="virtual"></v-radio>
          <v-radio
            label="Either in person or virtually."
            value="both"
          ></v-radio>
        </v-radio-group>

        <v-btn @click="e6 = 1" text>Go Back</v-btn>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-step>

    <v-stepper-step :complete="e6 > 3" step="3">
      Do you already have other groupmates? If so, please fill in their Umich
      emails.

      <v-stepper-content step="3">
        <v-text-field
          v-model="groupmate1"
          :counter="18"
          label="Groupmate 1"
          required
          class="mt-3"
          @keydown="limit( $event, 'groupmate1', 18)"
        >
        </v-text-field>
        <v-text-field
          v-model="groupmate2"
          :counter="18"
          label="Groupmate 2"
          required
          class="mt-3"
          @keydown="limit( $event, 'groupmate2', 18)"
        >
        </v-text-field>
        <v-text-field
          v-model="groupmate3"
          :counter="18"
          label="Groupmate 3"
          required
          class="mt-3"
          @keydown="limit( $event, 'groupmate3', 18)"
        >
        </v-text-field>
        <v-text-field
          v-model="groupmate4"
          :counter="18"
          label="Groupmate 4"
          required
          class="mt-3"
          @keydown="limit( $event, 'groupmate4', 18)"
        >
        </v-text-field>
        <v-text-field
          v-model="groupmate5"
          :counter="18"
          label="Groupmate 5"
          required
          class="mt-3"
          @keydown="limit( $event, 'groupmate5', 18)"
        >
        </v-text-field>
        <v-btn @click="e6 = 2" text>Go Back</v-btn>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-step>

    <v-stepper-step :complete="e6 > 4" step="4">
      Group Details

      <v-stepper-content step="4">
        <v-row>
          <v-col lg="12">
            Do you prefer working synchronously or asynchronously?
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="12">
            <v-slider
              v-model="async"
              track-color="purple"
              always-dirty
              min="0"
              max="100"
            >
              <template v-slot:prepend> Together </template>

              <template v-slot:append> Independent </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col lg="12">
            How soon do you prefer to start working on an assignment?
          </v-col>
        </v-row>

        <v-row>
          <v-col lg="12">
            <v-slider
              v-model="procastination"
              track-color="purple"
              always-dirty
              min="0"
              max="100"
            >
              <template v-slot:prepend> Immediately </template>

              <template v-slot:append> Eventually </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-btn @click="e6 = 3" text>Go Back</v-btn>
        <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-step>

    <v-stepper-step :complete="e6 > 5" step="5">
      Any other information to share?

      <v-stepper-content step="5">
        <v-row>
          <v-col lg="12">
            <v-textarea
              v-model="otherinfo"
              outlined
              name="other"
              label="Other Information"
              :counter="500"
              @keydown="limit( $event, 'otherinfo', 500)"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-btn @click="e6 = 4" text>Go Back</v-btn>
        <v-btn
          color="primary"
          @click="
            e6 = 6;
            submit();
          "
          >Submit Group Request</v-btn
        >
      </v-stepper-content>
    </v-stepper-step>

    <v-overlay :value="overlayLoad">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      Success! You have registered your group!
      <v-btn color="blue" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-stepper>
</template>


<script>
import axios from "axios";
import auth from "@/auth";

export default {
  name: "newSBR",
  data() {
    return {
      useremail: auth.user().email,
      e6: 1,
      monday: "red",
      tuesday: "red",
      wednesday: "red",
      thursday: "red",
      friday: "red",
      saturday: "red",
      sunday: "red",
      timezone: "",
      groupmate1: "",
      groupmate2: "",
      groupmate3: "",
      groupmate4: "",
      groupmate5: "",
      async: "50",
      procastination: "50",
      virtual: "physical",
      otherinfo: "",
      overlayLoad: false,
      snackbar: false,
      timeout: 5000,
    };
  },
  methods: {
    limit( event, dataProp, limit ) {
        if (this[dataProp].length >= limit) {
            event.preventDefault();
        }
    },
    async submit() {
      this.overlayLoad = true;
      try {
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        let virtual =
          this.virtual == "virtual" || this.virtual == "both" ? true : false;
        let inPerson =
          this.virtual == "physical" || this.virtual == "both" ? true : false;
        let aMon = this.monday == "red" ? false : true;
        let aTue = this.tuesday == "red" ? false : true;
        let aWed = this.wednesday == "red" ? false : true;
        let aThur = this.thursday == "red" ? false : true;
        let aFri = this.friday == "red" ? false : true;
        let aSat = this.saturday == "red" ? false : true;
        let aSun = this.sunday == "red" ? false : true;
        let groupmates = [this.useremail];
        if (this.groupmate1 !== "") groupmates.push(this.groupmate1);
        if (this.groupmate2 !== "") groupmates.push(this.groupmate2);
        if (this.groupmate3 !== "") groupmates.push(this.groupmate3);
        if (this.groupmate4 !== "") groupmates.push(this.groupmate4);
        if (this.groupmate5 !== "") groupmates.push(this.groupmate5);
        await axios
          .post(
            "https://api.group-finder.com/groups/",
            {
              groupmates: groupmates,
              isOpen: true,
              monday: aMon,
              tuesday: aTue,
              wednesday: aWed,
              thursday: aThur,
              friday: aFri,
              saturday: aSat,
              sunday: aSun,
              timezone: this.timezone,
              inPerson: inPerson,
              virtual: virtual,
              async: this.async,
              procast: this.procastination,
              other: this.otherinfo,
              teamname: "",
            },
            config
          );
        this.snackbar = true;
        this.overlayLoad = false;
        this.$router.push({ name: "Home", params: {} });
      } catch (error) {
        this.overlayLoad = false;
      }
    },
  },
};
</script>