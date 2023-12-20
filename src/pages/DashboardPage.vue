<template>
    <q-page class="q-pa-lg">
        <div class="full-width row wrap justify-between">
            <div class="row">
                <div class="col">
                    <span class="text-h5 text-weight-medium">Dashboard</span>
                </div>
            </div>
            <div
                class="full-width row wrap justify-between items-start q-mt-md"
            >
                <div class="col-7">
                    <div
                        class="full-width row wrap justify-between items-start text-weight-medium"
                    >
                        <q-card class="my-card w32 text-color-1 q-pa-md c1-bg">
                            <q-card-section>
                                <div class="text-h7">Total Leaves</div>
                                <div class="text-h4">24</div>
                            </q-card-section>
                        </q-card>
                        <q-card class="my-card w32 text-color-1 q-pa-md c2-bg">
                            <q-card-section>
                                <div class="text-h7">Leaves Taken</div>
                                <div class="text-h4">10</div>
                            </q-card-section>
                        </q-card>
                        <q-card class="my-card w32 text-color-1 q-pa-md c3-bg">
                            <q-card-section>
                                <div class="text-h7">Leaves Remaining</div>
                                <div class="text-h4">14</div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div
                        style="align-items: stretch; flex-wrap: wrap"
                        class="full-width flex row justify-between items-start text-weight-medium q-mt-md"
                    >
                        <q-card class="my-card w48 c4-bg" flat bordered>
                            <q-card-section horizontal class="full-width">
                                <q-card-section vertical class="q-pa-none w63">
                                    <q-card-section class="">
                                        <div class="text-h5 q-mb-md">
                                            Total Inventory Issued
                                        </div>
                                        <span
                                            class="text-h3 text-weight-bold q-mt-md"
                                            >02</span
                                        >
                                    </q-card-section>
                                    <q-card-section
                                        class="text-grey-9 text-caption q-pb-none"
                                    >
                                        <span>1 Laptop - AMIL016</span>
                                        <br />
                                        <span>1 Keyboard - AMIK023</span>
                                    </q-card-section>
                                </q-card-section>
                                <div class="test q-mt-md q-mx-none">
                                    <div class="border">
                                        <img
                                            class=""
                                            alt="Delivery outline"
                                            src="icons/delivery-outline.svg"
                                        />
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                        <q-card class="my-card w48 c4-bg" flat bordered>
                            <q-card-section
                                vertical
                                class="full-width q-pa-none"
                            >
                                <q-card-section class="q-pt-none">
                                    <div
                                        class="text-h6 text-weight-regular q-mt-sm q-mb-lg"
                                    >
                                        Number of Trainings Acquired
                                    </div>
                                    <span
                                        class="text-h3 text-weight-bold q-mb-xl"
                                        >03</span
                                    >
                                </q-card-section>
                                <q-card-section
                                    class="text-grey-9 text-caption q-pb-none"
                                >
                                    <span
                                        >Full Stack - HTML, CSS, React, Node JS,
                                        Express Js, Mongodb</span
                                    >
                                    <br />
                                    <span
                                        >Python, Data Science and Machine
                                        Learning</span
                                    >
                                </q-card-section>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div
                        class="full-width flex row justify-between items-start"
                    >
                        <!-- <span>2</span> -->
                        <div style="width: 100%" class="q-mt-lg">
                            <q-list bordered flat class="border2">
                                <div class="row justify-between">
                                    <q-item-label
                                        header
                                        class="text-h6 txt-color-1"
                                        >Announcement/Notice Board</q-item-label
                                    >
                                    <div
                                        class="custom-input-container q-mt-md q-mr-md"
                                    >
                                        <div
                                            class="custom-input text-caption"
                                            @click="openDatePicker1"
                                        >
                                            {{ formatDate(selectedDate) }}
                                            <q-icon
                                                name="expand_more"
                                                color=""
                                            />
                                        </div>
                                        <q-date
                                            v-if="datePicker1Visible"
                                            v-model="selectedDate"
                                            ref="datePicker1Visible"
                                            @hide="closeDatePicker"
                                        ></q-date>
                                    </div>
                                </div>
                                <q-item
                                    v-for="announcement in announcements"
                                    :key="announcement.topic"
                                    class="q-mx-md q-my-sm bg-grey-1"
                                    clickable
                                >
                                    <q-item-section>
                                        <q-item-label
                                            class="text-weight-medium"
                                            lines="1"
                                            >{{
                                                announcement.topic
                                            }}</q-item-label
                                        >
                                        <q-item-label caption>
                                            {{ announcement.time }}
                                        </q-item-label>
                                    </q-item-section>

                                    <q-item-section side>
                                        <q-icon name="more_horiz"></q-icon>
                                    </q-item-section>
                                </q-item>
                                <div class="row justify-center q-mr-md q-mb-md">
                                    <q-btn
                                        flat
                                        style="color: #ff5151"
                                        label="See All Announcement"
                                        no-caps
                                        to="/announcements"
                                    />
                                </div>
                            </q-list>
                        </div>
                    </div>
                </div>
                <div
                    class="col full-width column wrap justify-start items-start content-center"
                >
                    <div style="width: 90%">
                        <q-card class="my-card text-white" flat bordered>
                            <q-item class="c5u-bg">
                                <q-item-section>
                                    <q-item-label class="text-h5"
                                        >Recent Activity (By
                                        Admin)</q-item-label
                                    >
                                </q-item-section>
                            </q-item>

                            <!-- <q-separator /> -->

                            <q-card-section class="c5b-bg q-pa-sm">
                                <q-card-section class="col-4">
                                    <span class="text-caption text-grey"
                                        >10.40 AM, Fri 10 Sep 2021</span
                                    ><br />
                                    <p class="text-h5 q-mt-sm">
                                        You Posted a New Job
                                    </p>
                                    <p class="q-mt-sm">
                                        Kindly check the requirements and terms
                                        of work and<br />
                                        make sure everything is right.
                                    </p>
                                </q-card-section>
                                <q-card-section
                                    class="flex row justify-between"
                                >
                                    <p>Today you make 12 Activity</p>
                                    <q-btn
                                        class="btn1-bg"
                                        label="See All Activity"
                                    />
                                </q-card-section>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div style="width: 90%" class="q-mt-lg">
                        <q-list bordered flat class="border2">
                            <div class="row justify-between">
                                <q-item-label header class="text-h6 txt-color-1"
                                    >Leaves Overview</q-item-label
                                >
                                <div
                                    class="custom-input-container q-mt-md q-mr-md"
                                >
                                    <div
                                        class="custom-input text-caption"
                                        @click="openDatePicker2"
                                    >
                                        {{ formatDate(selectedDate) }}
                                        <q-icon name="expand_more" color="" />
                                    </div>
                                    <q-date
                                        v-if="datePicker2Visible"
                                        v-model="selectedDate"
                                        ref="datePicker2Visible"
                                        @hide="closeDatePicker"
                                    ></q-date>
                                </div>
                            </div>
                            <p class="text-body2 q-ml-md text-grey-9">
                                Details of Leave taken in the Past
                            </p>
                            <q-item
                                v-for="leave in leaves"
                                :key="leave.reason"
                                class="q-mx-md q-my-sm bg-grey-1"
                                clickable
                            >
                                <q-item-section>
                                    <q-item-label
                                        class="text-weight-medium"
                                        lines="1"
                                        >{{ leave.reason }}</q-item-label
                                    >
                                    <q-item-label caption>
                                        {{ leave.date }}
                                    </q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-icon name="more_horiz"></q-icon>
                                </q-item-section>
                            </q-item>
                            <div class="row justify-end q-mr-md q-mb-md">
                                <q-btn
                                    class="btn1-bg text-white"
                                    label="Apply For Leave"
                                    no-caps
                                />
                            </div>
                            <!-- <q-item-section side="right">
                                <q-btn
                                    class="btn1-bg flex justify-end q-mr-auto"
                                    label="Apply For leave"
                                />
                            </q-item-section> -->
                        </q-list>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "DashboardPage",
    data() {
        return {
            deliveryOutline: "",
            datePicker1Visible: false,
            datePicker2Visible: false,
            selectedDate: new Date().toISOString().substr(0, 10),
            leaves: [
                {
                    reason: "Brother's Marriage",
                    date: "24th Jan 2021 - 26th Jan 2021",
                },
                { reason: "Rakhi Leave", date: "15th August 2021" },
                {
                    reason: "Due to personal reason",
                    date: "1st Sep 2021 - 4th Sep 2021",
                },
            ],
            announcements: [
                {
                    topic: "Outing schedule for every department",
                    time: "5 Minutes ago",
                },
                { topic: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
                {
                    topic: "IT Department need two more talents for UX/UI Designer position",
                    time: "Yesterday, 09:15 AM",
                },
            ],
        };
    },
    methods: {
        openDatePicker1() {
            this.datePicker1Visible = !this.datePicker1Visible;
        },
        openDatePicker2() {
            this.datePicker2Visible = !this.datePicker2Visible;
        },
        closeDatePicker() {
            // Handle any logic when the date picker is closed (optional)
        },
        formatDate(dateString) {
            const options = {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            };
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", options);
        },
    },
});
</script>

<style scoped>
.w100 {
    width: 100%;
}

.text-color-1 {
    color: #121843;
}

.full-width .my-card {
    border-radius: 10px;
}

.w32 {
    flex: 1;
    max-width: 32%;
    /* Adjust as needed */
    height: 100%;
    /* This ensures all cards have the same height */
}

.w50 {
    flex: 1;
    max-width: 50%;
    /* Adjust as needed */
    height: 100%;
    /* This ensures all cards have the same height */
}

.w48 {
    max-width: 49%;
    border-radius: 10px;
}

.w63 {
    max-width: 63%;
}

.border {
    max-width: max-content;
    max-height: 50%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #c2c6bc;
}

.border2 {
    border: 1px solid #c2c6bc;
    border-radius: 10px;
}

.border2 .q-item {
    border: 2px solid #ccc;
    /* Set your desired border properties */
    border-radius: 5px;
    /* Optional: Add border-radius for rounded corners */
    padding: 10px;
}

.c1-bg {
    background-color: #ffefe7;
}

.c2-bg {
    background-color: #e8f0fb;
}

.c3-bg {
    background-color: #fdebf9;
}

.c4-bg {
    background-color: #f3f8eb;
}

.c5u-bg {
    background-color: #1b204a;
}

.c5b-bg {
    background-color: #121843;
}

.txt-color-1 {
    color: #121843;
}

.test {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
}

.btn1-bg {
    background-color: #ff5151;
}

.custom-input-container {
    display: inline-block;
}

.custom-input {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    border: 1px solid #ccc;
}
</style>
