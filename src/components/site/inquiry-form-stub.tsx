import { inquiry } from "@/lib/site";

// Netlify finds forms by reading the built HTML. The real form lives inside
// a modal that only exists after a click, so this hidden copy (same name,
// same fields) is what lets Netlify register the form. It is never shown.
export function InquiryFormStub() {
  return (
    <form
      name={inquiry.formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
    >
      <input type="hidden" name="form-name" value={inquiry.formName} />
      <input type="hidden" name="subject" value={inquiry.subject} />
      <input name="bot-field" />
      <input name="name" />
      <input type="email" name="email" />
      <input name="company" />
      <select name="interest">
        {inquiry.interests.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <textarea name="message" />
    </form>
  );
}
