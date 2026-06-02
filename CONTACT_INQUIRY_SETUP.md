# Contact Inquiry System - Implementation Guide

## Overview
The contact inquiry system allows users to submit contact forms from your website. The system is fully functional and handles email notifications to both the company and the customer.

## Architecture

### Frontend (Next.js)
- **Location**: `/app/contact_internal/contact-form.tsx`
- **API Route**: `/app/api/contact/route.ts`
- Accepts form submissions with validation
- Displays success/error messages using toast notifications
- Form fields: name, email, organization, phone, subject, message

### Backend (Laravel)
- **Controller**: `/api/app/Http/Controllers/components/contact_inquiry/ContactController.php`
- **Route**: `/api/routes/api.php` - POST `/api/contact`
- Validates incoming data
- Sends two emails:
  1. Company notification email
  2. Customer confirmation email

### Email Templates
- **Company Notification**: `/api/resources/views/Contact/company.blade.php`
  - Sent to: mencinecoltd@gmail.com
  - Contains full customer details and message
  - Includes "Reply to Customer" button

- **Customer Confirmation**: `/api/resources/views/Contact/customer.blade.php`
  - Sent to: Customer's email address
  - Confirms receipt of their inquiry
  - Provides expected response time (24-48 hours)

## Configuration

### Environment Variables

**Next.js** (`.env.local`):
```
NEXT_PUBLIC_LARAVEL_API_URL=http://localhost:8000
```

**Laravel** (`.env`):
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=pastoriejoe18@gmail.com
MAIL_PASSWORD=fzdmrcsadjexckmd
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="pastoriejoe18@gmail.com"
MAIL_FROM_NAME="Mencine Co Ltd"
```

## How It Works

### User Journey
1. User navigates to `/contact` page
2. Fills out the contact form with:
   - Full Name (required)
   - Email Address (required)
   - Organization (optional)
   - Phone Number (optional)
   - Subject (required)
   - Message (required)
3. Clicks "Send Message"

### Data Flow
1. **Frontend** → Form validation
2. **Next.js API** → Validates required fields
3. **Next.js API** → Forwards to Laravel API (http://localhost:8000/api/contact)
4. **Laravel Controller** → Validates all data
5. **Laravel Mail** → Sends company notification email
6. **Laravel Mail** → Sends customer confirmation email
7. **Response** → Returns success/error to frontend
8. **Frontend** → Displays toast notification

## API Endpoints

### POST `/api/contact`

**Request** (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "Example Organization",
  "phone": "+255 123 456 789",
  "subject": "Waste Management Solution",
  "message": "I'm interested in your smoke-free incinerator solutions..."
}
```

**Success Response** (201):
```json
{
  "status": "success",
  "message": "Your message has been sent successfully."
}
```

**Error Response** (400/500):
```json
{
  "status": "error",
  "message": "Error message describing what went wrong"
}
```

## Features

- ✅ Form validation on frontend and backend
- ✅ Email notifications to company
- ✅ Automatic confirmation email to customer
- ✅ Toast notifications for user feedback
- ✅ Responsive design
- ✅ Company branding in emails
- ✅ Error handling and logging
- ✅ Loading states during submission

## Testing

### Test with cURL
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "organization": "Test Org",
    "phone": "+255 123 456 789",
    "subject": "Test Subject",
    "message": "Test message content"
  }'
```

### Email Testing
Use the Laravel test endpoint to verify email configuration:
```bash
curl http://localhost:8000/api/test-email
```

## Troubleshooting

### Emails Not Sending
1. Check `.env` configuration in Laravel
2. Verify Gmail credentials (may need app-specific password)
3. Check Laravel logs: `/api/storage/logs/laravel.log`
4. Enable "Less secure app access" in Gmail settings if needed

### API Connection Issues
1. Verify Laravel API is running on `http://localhost:8000`
2. Check CORS if making cross-origin requests
3. Verify `.env.local` has correct `NEXT_PUBLIC_LARAVEL_API_URL`
4. Check browser console for detailed error messages

### Form Not Submitting
1. Check all required fields are filled
2. Verify email format is valid
3. Check browser console for JavaScript errors
4. Ensure Toast component is properly imported

## Files Modified/Created

- ✅ Created: `/app/api/contact/route.ts` - Next.js API route
- ✅ Updated: `.env.local` - Added Laravel API URL
- ✅ Existing: `/app/contact_internal/contact-form.tsx` - Frontend form
- ✅ Existing: `/api/app/Http/Controllers/components/contact_inquiry/ContactController.php` - Backend controller
- ✅ Existing: `/api/resources/views/Contact/company.blade.php` - Company email
- ✅ Existing: `/api/resources/views/Contact/customer.blade.php` - Customer email
- ✅ Fixed: `/api/resources/views/Contact/company.blade.php` - Fixed broken HTML line

## Next Steps (Optional Enhancements)

1. Add contact inquiry storage in database
2. Add customer inquiry tracking dashboard
3. Add file upload capability
4. Implement rate limiting on form submissions
5. Add custom confirmation message per organization type
6. Set up SMS notifications
7. Add inquiry categorization/tagging
8. Implement auto-response scheduling

## Support

For issues or questions about the contact inquiry system implementation, refer to:
- Laravel Mail documentation: https://laravel.com/docs/mail
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- Blade templating: https://laravel.com/docs/blade
