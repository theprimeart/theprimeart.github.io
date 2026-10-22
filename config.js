// Links and details the site uses. Leave a value empty until the account or fact exists:
// empty form links show a "coming soon" message, empty payment links hide the Pay button,
// and empty business details hide the legal line in the footer.
window.TPA = {
  prizeNoticeForm: "",   // Tally form URL for "Get the opening notice", e.g. https://tally.so/r/xxxxxx
  enquiryForm: "",       // Tally form URL for "Ask about a package"
  payEntry: "",          // payment link, ₩40,000 prize entry (Korea)
  payEntryIntl: "",      // payment link, US$30 prize entry (outside Korea)
  payKoreanPress: "",    // ₩700,000
  payEnglishProfile: "", // ₩1,700,000
  payEssay: "",          // ₩1,500,000
  contactEmail: "",      // public contact address, e.g. hello@...
  // Business details required by Korean e-commerce law once payments open.
  business: {
    name: "",            // 상호
    representative: "",  // 대표자
    regNo: "",           // 사업자등록번호
    mailOrderNo: "",     // 통신판매업 신고번호
    address: "",         // 주소
    phone: ""            // 전화
  }
};
