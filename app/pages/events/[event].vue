<template>
  <event-page-banner-section
    :event-deadline="oneEventData?.eventDeadline"
    :event-is-in-person="oneEventData?.eventIsInPerson"
    :event-name="oneEventData?.eventName"
    :event-description="oneEventData?.eventDescription"
  />
  <event-page-component-section
    :event-description="oneEventData?.eventDescription"
    :event-judging-criteria="oneEventData?.eventJudgingCriteria"
    :event-prizes1="oneEventData?.eventPrizes1"
    :event-prizes2="oneEventData?.eventPrizes2"
    :event-prizes3="oneEventData?.eventPrizes3"
    :event-prizes4="oneEventData?.eventPrizes4"
    :event-prizes5="oneEventData?.eventPrizes5"
    :event-prizes6="oneEventData?.eventPrizes6"
    :event-requirements="oneEventData?.eventRequirements"
  />
</template>

<script lang="ts" setup>
interface RouteParams {
  event: string;
}

const route = useRoute();
const eventName = (route.params as RouteParams).event;

// const oneEventStore = useOneEventStore();
// const { records: oneEventData } = storeToRefs(oneEventStore);

// async function fetchHomeData() {
//   await oneEventStore.get({
//     populate: "*",
//     filters: {
//       eventName: eventName,
//     },
//   });
// }
// fetchHomeData();

const {
  data: oneEventData,
  error,
  status,
} = await useAsyncData("oneEventData", async () => {
  const store = useOneEventStore();
  await store.get({
    populate: "*",
    filters: {
      eventName: eventName,
    },
  });
  return store.records;
});
</script>

<style></style>
