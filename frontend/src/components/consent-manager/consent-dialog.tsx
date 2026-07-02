'use client';

import { useState } from 'react';
import { ConsentDialog, ConsentWidget } from '@c15t/nextjs';

/**
 * Consent dialog using compound components.
 * @see https://c15t.com/docs/frameworks/nextjs/components/consent-dialog
 */
export default function () {
	const [openItem, setOpenItem] = useState('');

	return (
		<ConsentDialog.Root>
			<ConsentDialog.Card>
				<ConsentDialog.Header>
					<ConsentDialog.HeaderTitle />
					<ConsentDialog.HeaderDescription />
				</ConsentDialog.Header>
				<ConsentDialog.Content>
					<ConsentWidget.Root>
						<ConsentWidget.Accordion
							type="single"
							value={openItem}
							onValueChange={(value) => {
								setOpenItem(Array.isArray(value) ? (value[0] ?? '') : (value ?? ''));
							}}
						>
							<ConsentWidget.AccordionItems />
						</ConsentWidget.Accordion>
						{/* Pass renderAction to customize mapping. Stock c15t buttons render by default. */}
						<ConsentWidget.PolicyActions />
					</ConsentWidget.Root>
				</ConsentDialog.Content>
				<ConsentDialog.Footer />
			</ConsentDialog.Card>
		</ConsentDialog.Root>
	);
}
