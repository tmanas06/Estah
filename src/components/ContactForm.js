'use client';

export default function ContactForm() {
    return (
        <form className="retro-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
                <label>Subject</label>
                <select>
                    <option>Partnership Inquiry</option>
                    <option>Volunteering</option>
                    <option>Donation Information</option>
                    <option>General Message</option>
                </select>
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us more..."></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
        </form>
    );
}
