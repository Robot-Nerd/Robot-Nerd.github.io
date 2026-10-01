// Edit this file only. Anything containing {{...}} is a placeholder and is highlighted on the page until you replace it.
const SITE = {
  bride: "Maria", brideFull: "Maria Catherine Clarke",
  groom: "Daniel", groomFull: "Daniel Dean Dierking Jr.",
  dateISO: "2027-05-22T10:00:00-05:00",
  dateLabel: "Saturday, May 22, 2027",
  city: "Kansas City, Missouri",
  hashtag: "#deerqueen",

  events: [
    { when: "Friday, May 21 · 4:00 PM", title: "Rehearsal and dinner", place: "Old St. Patrick's Oratory + Christus Rex Center", address: "Kansas City, Missouri", map: "Old St. Patrick's Oratory Kansas City", note: "Wedding party and immediate family. {{DINNER_INVITE_DETAILS}}" },
    { when: "Saturday, May 22 · 11:00 AM", title: "Ceremony", place: "Old St. Patrick's Oratory", address: "Kansas City, Missouri", map: "Old St. Patrick's Oratory Kansas City", note: "{{CEREMONY_ARRIVAL_AND_PARKING_NOTES}}", main: true },
    { when: "Saturday, May 22 · 12:30 PM", title: "Reception", place: "Meadowbrook Park", address: "Kansas City", map: "Meadowbrook Park Kansas City", note: "{{RECEPTION_DETAILS_FOOD_DANCING_END_TIME}}" }
  ],

  party: [
    { name: "{{BEST_MAN_NAME}}", role: "Best Man", side: "Daniel", bio: "Friend of the groom" },
    { name: "{{GROOMSMAN_2_NAME}}", role: "Groomsman", side: "Daniel", bio: "Friend of the groom" },
    { name: "{{GROOMSMAN_3_NAME}}", role: "Groomsman", side: "Daniel", bio: "Friend of the groom" },
    { name: "{{GROOMSMAN_4_NAME}}", role: "Groomsman", side: "Daniel", bio: "Friend of the groom" },
    { name: "{{GROOMSMAN_5_NAME}}", role: "Groomsman", side: "Daniel", bio: "Friend of the groom" },
    { name: "{{MAID_OF_HONOR_NAME}}", role: "Maid of Honor", side: "Maria", bio: "Friend of the bride" },
    { name: "{{BRIDESMAID_2_NAME}}", role: "Bridesmaid", side: "Maria", bio: "Sister of the bride" },
    { name: "{{BRIDESMAID_3_NAME}}", role: "Bridesmaid", side: "Maria", bio: "Sister of the bride" },
    { name: "{{BRIDESMAID_4_NAME}}", role: "Bridesmaid", side: "Maria", bio: "Sister of the bride" },
    { name: "{{BRIDESMAID_5_NAME}}", role: "Bridesmaid", side: "Maria", bio: "Sister of the bride" }
  ],

  travel: [
    { title: "Getting there", text: "MCI Airport is 18 miles (~25 minutes from the church)" },
    { title: "Where to stay", text: "{{HOTEL_NAME_BLOCK_CODE_AND_BOOKING_DEADLINE}}", url: "{{HOTEL_BOOKING_URL}}", link: "Book a room" },
    { title: "Parking", text: "The church lot is onsite" }
  ],

  faqs: [
    { q: "What should I wear?", a: "We kindly request formal attire for our wedding. For gentlemen, this entails a traditional suit and tie or a tuxedo. For ladies, we request a floor-length gown or an elegant, formal cocktail dress. As we will be celebrating a Nuptial Mass in a Catholic church, we respectfully ask that attire remain modest and appropriate for a sacred space, with shoulders and knees covered during the ceremony." },
    { q: "Can I bring a guest?", a: "Due to space limitations at our venue, we are only able to accommodate the guests officially listed on your invitation envelope. We appreciate your understanding and can't wait to celebrate with you!" },
    { q: "Can I use my phone to take pictures?", a: "Yes! Scan the QR code in your program to instantly share your favorite moments and photos with us!" },
    { q: "What if I have any dietary restrictions?", a: "Tell us in your RSVP and we'll make sure you're covered." }
  ],

  registry: [
    { name: "Amazon", url: "{{REGISTRY_1_URL}}" },
    { name: "Crate & Barrel", url: "{{REGISTRY_2_URL}}" }
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
