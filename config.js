// Edit this file only. Anything containing {{...}} is a placeholder and is highlighted on the page until you replace it.
const SITE = {
  bride: "Maria", brideFull: "Maria Catherine Clarke",
  groom: "Daniel", groomFull: "Daniel Dean Dierking Jr.",
  dateISO: "2027-05-22T10:00:00-05:00",
  dateLabel: "Saturday, May 22, 2027",
  city: "Kansas City, Missouri",
  hashtag: "{{HASHTAG}}",

  story: [
    "{{HOW_WE_MET}}",
    "{{FIRST_DATE_OR_EARLY_MEMORY}}",
    "{{THE_PROPOSAL_STORY}}"
  ],

  events: [
    { when: "Friday, May 21 · {{REHEARSAL_TIME}}", title: "Rehearsal and dinner", place: "{{REHEARSAL_DINNER_VENUE}}", address: "{{REHEARSAL_DINNER_ADDRESS}}", note: "Wedding party and immediate family. {{DINNER_INVITE_DETAILS}}" },
    { when: "Saturday, May 22 · 10:00 AM", title: "Ceremony", place: "Old St. Patrick's Oratory", address: "Kansas City, Missouri", map: "Old St. Patrick's Oratory Kansas City", note: "{{CEREMONY_ARRIVAL_AND_PARKING_NOTES}}", main: true },
    { when: "Saturday, May 22 · {{RECEPTION_START_TIME}}", title: "Reception", place: "Meadowbrook Park", address: "Kansas City", map: "Meadowbrook Park Kansas City", note: "{{RECEPTION_DETAILS_FOOD_DANCING_END_TIME}}" }
  ],

  party: [
    { name: "{{BEST_MAN_NAME}}", role: "Best Man", side: "Daniel", bio: "{{ONE_LINE_BIO}}" },
    { name: "{{GROOMSMAN_1_NAME}}", role: "Groomsman", side: "Daniel", bio: "{{ONE_LINE_BIO}}" },
    { name: "{{GROOMSMAN_2_NAME}}", role: "Groomsman", side: "Daniel", bio: "{{ONE_LINE_BIO}}" },
    { name: "{{MAID_OF_HONOR_NAME}}", role: "Maid of Honor", side: "Maria", bio: "{{ONE_LINE_BIO}}" },
    { name: "{{BRIDESMAID_1_NAME}}", role: "Bridesmaid", side: "Maria", bio: "{{ONE_LINE_BIO}}" },
    { name: "{{BRIDESMAID_2_NAME}}", role: "Bridesmaid", side: "Maria", bio: "{{ONE_LINE_BIO}}" }
  ],

  travel: [
    { title: "Getting there", text: "{{NEAREST_AIRPORT_AND_DRIVING_NOTES}}" },
    { title: "Where to stay", text: "{{HOTEL_NAME_BLOCK_CODE_AND_BOOKING_DEADLINE}}", url: "{{HOTEL_BOOKING_URL}}", link: "Book a room" },
    { title: "Parking", text: "{{PARKING_AT_CHURCH_AND_PARK}}" }
  ],

  faqs: [
    { q: "What should I wear?", a: "{{DRESS_CODE_AND_OUTDOOR_RECEPTION_NOTES}}" },
    { q: "Are children welcome?", a: "{{KIDS_POLICY}}" },
    { q: "Can I bring a guest?", a: "{{PLUS_ONE_POLICY}}" },
    { q: "Is there a shuttle between the church and the reception?", a: "{{TRANSPORTATION_INFO}}" },
    { q: "What if it rains?", a: "{{WEATHER_BACKUP_PLAN}}" },
    { q: "Will there be an unplugged ceremony?", a: "{{PHOTO_POLICY}}" },
    { q: "Dietary restrictions?", a: "Tell us in your RSVP and we'll make sure you're covered." }
  ],

  registry: [
    { name: "{{REGISTRY_1_NAME}}", url: "{{REGISTRY_1_URL}}" },
    { name: "{{REGISTRY_2_NAME}}", url: "{{REGISTRY_2_URL}}" }
  ],
  registryNote: "{{REGISTRY_OR_GIFT_MESSAGE}}",

  rsvp: { deadline: "{{RSVP_DEADLINE}}", formUrl: "{{RSVP_FORM_URL_OR_EMPTY}}", email: "{{CONTACT_EMAIL}}", phone: "{{CONTACT_PHONE_OPTIONAL}}" },

  photos: [
    { src: "images/embrace.jpg", alt: "Maria and Daniel embracing on the beach, her engagement ring visible" },
    { src: "images/royals.jpg", alt: "Maria and Daniel in Kansas City Royals gear" },
    { src: "images/field.jpg", alt: "Maria and Daniel smiling in front of an open green field" },
    { src: "images/bluff.jpg", alt: "Maria and Daniel on a bluff above a wide river valley" },
    { src: "images/city.jpg", alt: "Maria and Daniel on a rooftop above a city skyline" }
  ]
};
