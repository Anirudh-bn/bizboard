-- Seed data for businesses table
-- Insert 10 example businesses with realistic data

insert into public.businesses (
  name,
  slug,
  short_description,
  full_description,
  category,
  tags,
  cover_image_url,
  gallery_image_urls,
  rating,
  price_tier,
  city_or_area,
  website_url,
  contact_email,
  contact_phone,
  is_featured
) values
(
  'Blue Bottle Cafe',
  'blue-bottle-cafe',
  'Artisanal coffee roasters serving specialty drinks and fresh pastries in a minimalist setting.',
  'Blue Bottle Cafe is a specialty coffee shop dedicated to sourcing and roasting the finest beans from around the world. Our baristas craft each cup with precision and care, ensuring you experience coffee at its peak flavor. We offer a rotating selection of single-origin coffees, signature espresso blends, and seasonal drinks. Pair your coffee with our fresh-baked pastries and light breakfast options. Our minimalist interior provides a calm, focused environment perfect for work or casual meetings.',
  'Cafe',
  ARRAY['Coffee', 'WiFi', 'Pastries', 'Quiet', 'Laptop Friendly'],
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800'
  ],
  4.5,
  2,
  'San Francisco, Mission District',
  'https://bluebottlecoffee.com',
  'info@bluebottle.com',
  '+1-415-555-0100',
  true
),
(
  'The Workspace Co',
  'the-workspace-co',
  'Modern coworking space with private offices, hot desks, and meeting rooms.',
  'The Workspace Co is a premium coworking environment designed for professionals, startups, and remote teams. We offer flexible membership plans including hot desks, dedicated desks, and private offices. All memberships include high-speed internet, unlimited coffee and tea, printing services, and access to our meeting rooms and event spaces. Our community hosts regular networking events, workshops, and social hours. Amenities include standing desks, ergonomic chairs, phone booths for private calls, and a fully stocked kitchen.',
  'Coworking',
  ARRAY['WiFi', '24/7 Access', 'Meeting Rooms', 'Coffee', 'Event Space', 'Printing'],
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800'
  ],
  4.7,
  3,
  'Hyderabad, Banjara Hills',
  'https://theworkspaceco.com',
  'hello@workspaceco.com',
  '+91-40-555-0200',
  true
),
(
  'Flex & Flow Yoga',
  'flex-flow-yoga',
  'Welcoming yoga studio offering classes for all levels, from beginner to advanced.',
  'Flex & Flow Yoga is a community-centered studio that believes yoga is for every body. We offer a diverse schedule of classes including Vinyasa, Hatha, Yin, Restorative, and Power Yoga. Our experienced instructors provide modifications and adjustments to ensure everyone practices safely and effectively. First-timers are always welcome, and we offer introductory packages to help you start your journey. The studio features natural light, eco-friendly mats, props, and a calming atmosphere. Join us for special workshops, meditation sessions, and community events throughout the year.',
  'Fitness',
  ARRAY['Yoga', 'Meditation', 'All Levels', 'Mat Provided', 'Showers', 'Community'],
  'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800',
    'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800'
  ],
  4.8,
  2,
  'Austin, Downtown',
  'https://flexandflow.yoga',
  'namaste@flexandflow.com',
  '+1-512-555-0300',
  false
),
(
  'Craft & Co Brewery',
  'craft-co-brewery',
  'Local craft brewery featuring seasonal beers, taproom, and weekend food trucks.',
  'Craft & Co Brewery is a neighborhood brewery committed to crafting exceptional beer using locally sourced ingredients whenever possible. Our taproom features 12 rotating taps with IPAs, lagers, stouts, sours, and seasonal specialties. We believe beer brings people together, so our space is designed for conversation and connection. Enjoy board games, live music on weekends, and a rotating lineup of local food trucks in our outdoor beer garden. Bring your dog, bring your friends, and enjoy fresh beer in a relaxed atmosphere. Growler fills and crowlers available to go.',
  'Bar & Brewery',
  ARRAY['Craft Beer', 'Dog Friendly', 'Outdoor Seating', 'Live Music', 'Food Trucks'],
  'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800',
    'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800',
    'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800'
  ],
  4.4,
  2,
  'Portland, East Side',
  'https://craftandcobrewery.com',
  'cheers@craftandco.com',
  '+1-503-555-0400',
  false
),
(
  'Glow Beauty Lounge',
  'glow-beauty-lounge',
  'Full-service salon offering haircuts, color, facials, and nail services.',
  'Glow Beauty Lounge is your destination for professional beauty services in a luxurious yet welcoming environment. Our talented team of stylists, colorists, estheticians, and nail technicians are dedicated to helping you look and feel your best. We use premium, cruelty-free products and stay current with the latest trends and techniques. Services include precision haircuts, balayage and color correction, hydrafacials, microdermabrasion, gel manicures, and more. Book a consultation to discuss your beauty goals, or treat yourself to one of our signature spa packages.',
  'Salon & Spa',
  ARRAY['Hair Styling', 'Facials', 'Nails', 'Waxing', 'Luxury', 'Organic Products'],
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800'
  ],
  4.6,
  3,
  'Mumbai, Bandra West',
  'https://glowbeautylounge.com',
  'hello@glowbeauty.com',
  '+91-22-555-0500',
  true
),
(
  'Nourish Bowl Kitchen',
  'nourish-bowl-kitchen',
  'Fast-casual restaurant serving healthy grain bowls, smoothies, and fresh juices.',
  'Nourish Bowl Kitchen makes eating healthy delicious and convenient. Our menu features build-your-own grain bowls with bases like quinoa, brown rice, and mixed greens, topped with your choice of proteins including grilled chicken, tofu, falafel, and salmon. Add unlimited veggies, house-made dressings, and superfood toppings. We also offer fresh-pressed juices, protein smoothies, and seasonal soups. All ingredients are sourced from local farms when available. Perfect for a quick lunch or post-workout meal. Catering and meal prep packages available.',
  'Restaurant',
  ARRAY['Healthy', 'Vegan Options', 'Gluten Free', 'Fresh Juice', 'Takeout', 'Catering'],
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800'
  ],
  4.3,
  2,
  'Los Angeles, West Hollywood',
  'https://nourishbowl.com',
  'orders@nourishbowl.com',
  '+1-323-555-0600',
  false
),
(
  'The Bookshelf Cafe',
  'the-bookshelf-cafe',
  'Independent bookstore and cafe featuring curated books, coffee, and community events.',
  'The Bookshelf Cafe is more than just a bookstore - it is a gathering place for book lovers and coffee enthusiasts. Browse our carefully curated selection of fiction, non-fiction, poetry, and local authors while enjoying expertly brewed coffee and homemade baked goods. Our knowledgeable staff is always ready with recommendations. We host author readings, book clubs, poetry slams, and open mic nights. Comfortable seating areas throughout the store invite you to settle in with a new book. Support local, independent retail and discover your next favorite read.',
  'Bookstore',
  ARRAY['Books', 'Coffee', 'Events', 'Local Authors', 'WiFi', 'Community'],
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800'
  ],
  4.9,
  1,
  'Seattle, Capitol Hill',
  'https://bookshelfcafe.com',
  'info@bookshelfcafe.com',
  '+1-206-555-0700',
  false
),
(
  'Peak Performance Gym',
  'peak-performance-gym',
  '24/7 fitness center with strength training, cardio, group classes, and personal training.',
  'Peak Performance Gym is a full-service fitness facility dedicated to helping you reach your health and fitness goals. Our 15,000 sq ft facility includes a comprehensive weight room with free weights and machines, extensive cardio equipment with entertainment options, functional training area, and group fitness studio. Membership includes access to all equipment, locker rooms with showers, and unlimited group classes including HIIT, cycling, yoga, and Zumba. Personal training and nutrition coaching available. Open 24/7 with keycard access for ultimate flexibility.',
  'Fitness',
  ARRAY['24/7 Access', 'Personal Training', 'Group Classes', 'Showers', 'Cardio', 'Weights'],
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800',
    'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=800'
  ],
  4.2,
  2,
  'Chicago, Lincoln Park',
  'https://peakperformancegym.com',
  'membership@peakperformance.com',
  '+1-312-555-0800',
  false
),
(
  'Verde Plant Shop',
  'verde-plant-shop',
  'Urban plant shop selling houseplants, pots, and offering plant care workshops.',
  'Verde Plant Shop brings the joy of plants to urban dwellers. We offer a wide selection of houseplants from easy-care pothos and snake plants to rare philodendrons and tropical beauties. Each plant comes with care instructions, and our staff is always available to answer questions and help you choose the right plant for your space and lifestyle. Shop our collection of handmade ceramic pots, plant stands, and accessories. Join us for monthly workshops on topics like propagation, repotting, and plant styling. We also offer plant sitting services when you travel.',
  'Retail',
  ARRAY['Plants', 'Workshops', 'Pots', 'Plant Care', 'Gift Shop', 'Local'],
  'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800',
    'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800'
  ],
  4.7,
  2,
  'Brooklyn, Williamsburg',
  'https://verdeplants.com',
  'hello@verdeplants.com',
  '+1-718-555-0900',
  false
),
(
  'Artisan Bread Co',
  'artisan-bread-co',
  'Bakery specializing in sourdough, European-style breads, and fresh pastries.',
  'Artisan Bread Co is a small-batch bakery committed to traditional bread-making techniques. We use organic flour, natural starters, and slow fermentation to create breads with exceptional flavor and texture. Our daily selection includes sourdough loaves, baguettes, focaccia, whole grain breads, croissants, and seasonal pastries. Everything is made by hand in our open kitchen. Arrive early for the best selection, as we often sell out of popular items. Pre-order available for large quantities. We also offer baking classes where you can learn to make sourdough at home.',
  'Bakery',
  ARRAY['Sourdough', 'Organic', 'Pastries', 'Classes', 'Fresh Daily', 'Artisan'],
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
    'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800',
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800'
  ],
  4.8,
  2,
  'Denver, Highlands',
  'https://artisanbreadco.com',
  'orders@artisanbread.com',
  '+1-303-555-1000',
  true
);
