<template>
    <q-page class="q-ma-md">
        <div>
            <p class="text-h5">Announcement Tab</p>
        </div>
        <div class="flex" style="max-width: 100%">
            <div class="flex row justify-center">
                <div
                    style="width: 48%"
                    class="q-ma-sm flex"
                    v-for="(item, index) in announcements"
                    :key="index"
                >
                    <q-card
                        class="my-card cards-bg"
                        flat
                        bordered
                        content-class="card-content"
                    >
                        <q-item class="bg-pink">
                            <q-item-section side>
                                <q-icon
                                    class="text-grey-10"
                                    name="calendar_month"
                                ></q-icon>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label class="text-white">
                                    {{ item.date }}</q-item-label
                                >
                            </q-item-section>
                        </q-item>
                        <q-item class="q-pa-none">
                            <q-card-section>
                                <q-card-section class="col-4">
                                    <p class="text-h5">
                                        {{ item.topic }}
                                    </p>
                                    <p class="q-mt-sm">
                                        {{ item.details }}
                                    </p>
                                </q-card-section>
                            </q-card-section>
                        </q-item>
                    </q-card>
                    <!-- <div v-else class="q-mx-sm"></div> -->
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "AnnouncementsPage",
    data() {
        return {
            announcements: [
                {
                    date: "12 Dec 2023",
                    topic: "We're Hiring! Node js developer Position Available Now",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },
                {
                    date: "12 Dec 2023",
                    topic: "Internship Program Welcomes Aspiring Talent to Ignite Innovation and Foster Professional Growth.",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },
                {
                    date: "12 Dec 2023",
                    topic: "Get Ready to Wow: Big Hackathon News Coming Your Way!",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },
                {
                    date: "12 Dec 2023",
                    topic: "Updates to Our Work-From-Home Policy!",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },
            ],
        };
    },
    computed: {
        combinedArray() {
            // Combine announcements with placeholder items for spaces
            const result = [];
            this.announcements.forEach((announcement, index) => {
                result.push({ type: "announcement", data: announcement });
                // Add a placeholder item for the space after each announcement
                if (index < this.announcements.length - 1) {
                    result.push({ type: "space" });
                }
            });
            return result;
        },
    },
});
</script>

<style scoped>
.w-100 {
    width: 100%;
}
.bg-pink {
    background-color: #ff5151 !important;
}

.cards-bg {
    background-color: #e8f0fb;
}
</style>

<!-- <q-card class="my-card col cards-bg" flat bordered>
                    <q-item class="bg-pink">
                        <q-item-section>
                            <q-item-label class="text-h5"
                                >Recent Activity (By Admin)</q-item-label
                            >
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none">
                        <q-card-section>
                            <q-card-section class="col-4">
                                <p class="text-h5 q-mt-sm">
                                    We're Hiring! Node js developer Position
                                    Available Now
                                </p>
                                <p class="q-mt-sm">
                                    Kindly check the requirements and terms of
                                    work and<br />
                                    make sure everything is right.
                                </p>
                            </q-card-section>
                        </q-card-section>
                    </q-item>
                </q-card> -->

<!--
                <div class="flex justify-between">
                    <div class="row flex full-width">
                        <q-card class="my-card col cards-bg" flat bordered>
                            <q-item class="bg-pink">
                                <q-item-section side>
                                    <q-icon
                                        color="grey-10"
                                        name="calendar_month"
                                    ></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-white">
                                        12 Dec 2023</q-item-label
                                    >
                                </q-item-section>
                            </q-item>
                            <q-item class="q-pa-none">
                                <q-card-section>
                                    <q-card-section class="col-4">
                                        <p class="text-h5">
                                            We're Hiring! Node js developer Position
                                            Available Now
                                        </p>
                                        <p class="q-mt-sm">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </q-card-section>
                                </q-card-section>
                            </q-item>
                        </q-card>
                        <div class="q-mx-sm"></div>
                        <q-card class="my-card col cards-bg" flat bordered>
                            <q-item class="bg-pink">
                                <q-item-section side>
                                    <q-icon
                                        color="grey-10"
                                        name="calendar_month"
                                    ></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-white"
                                        >12 Dec 2023</q-item-label
                                    >
                                </q-item-section>
                            </q-item>
                            <q-item class="q-pa-none">
                                <q-card-section>
                                    <q-card-section class="col-4">
                                        <p class="text-h5">
                                            We're Hiring! Node js developer Position
                                            Available Now
                                        </p>
                                        <p class="q-mt-sm">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </q-card-section>
                                </q-card-section>
                            </q-item>
                        </q-card>
                    </div>
                </div> -->
